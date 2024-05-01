import { rtkApi } from "@/shared/api/rtkApi";

export const searchOnSiteApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    searchOnSite: builder.query<any[], { field: string }>({
      query: ({ field }) => ({
        url: '/searchOnSite',
        method: 'GET',
        params: {
          field,
        }
      }),
    }),
  })
});

export const {
  useSearchOnSiteQuery,
} = searchOnSiteApi;
