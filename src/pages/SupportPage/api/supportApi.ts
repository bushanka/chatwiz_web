import { rtkApi } from "@/shared/api/rtkApi";

export const supportApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    support: builder.mutation<void, string>({
      query: (sms) => ({
        url: '/feedback/',
        method: 'POST',
        params: {
          comment: sms,
        }
      }),
    }),
  })
});

export const {
  useSupportMutation,
} = supportApi;
