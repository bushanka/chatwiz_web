import { setCookie, getCookie } from 'typescript-cookie';
import { Mutex } from 'async-mutex';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { userActions, UserSchema } from '@/entities/User';

const mutex = new Mutex();
const baseQueryWithReAuth: BaseQueryFn<
    FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    const state = api.getState() as {user: UserSchema};
    const baseQuery = fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = getCookie('access_token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    });
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result?.error?.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const { data }: any = await baseQuery({
                    url: '/refresh_access_token/',
                    method: 'POST',
                    params: {
                        refresh_token: getCookie('refresh_token'),
                    }
                }, api, extraOptions);

                if (data) {
                    setCookie('access_token', data.access_token);
                    // setCookie('refresh_token', data.refresh_token);
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(userActions.logout());
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    tagTypes: [
        'AllChats',
        'Chat',
        'Contexts',
    ],
    endpoints: (builder) => ({}),
});