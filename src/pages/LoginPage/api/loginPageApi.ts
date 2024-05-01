import { userActions } from "@/entities/User";
import { rtkApi } from "@/shared/api/rtkApi";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { setCookie } from "typescript-cookie";

interface Login {
  body: FormData;
}

interface LoginRes {
  access_token: string;
  refresh_token: string;
  token_type : string;
}

export const loginPageApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginRes, Login>({
      query: ({ body }) => ({
        url: '/authorization/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try {
              const { data } = await queryFulfilled;
              setCookie('access_token', data?.access_token);
              setCookie('refresh_token', data?.refresh_token);
              dispatch(userActions.setAuthData({
                  access_token: data?.access_token,
              }));
              localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify({
                access_token: data?.access_token,
              }));
          } catch (err) {
              console.log(err);
          }
      },
    }),
  })
});

export const {
  useLoginMutation,
} = loginPageApi;
