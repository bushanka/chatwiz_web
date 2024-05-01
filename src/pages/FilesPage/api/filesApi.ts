import { rtkApi } from "@/shared/api/rtkApi";

interface Contexts {
  id: number;
  name: string;
  user_id: number;
  type: string;
  size: number;
  path: string;
  creation_date: string;
}

export const filesApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadContext: builder.mutation<Contexts, FormData>({
      query: (file) => ({
        url: '/context/uploadfile/',
        method: 'POST',
        body: file,
      }),
      invalidatesTags: ['Chat', 'Contexts'],
    }),
    allContexts: builder.query<Contexts[], void>({
      query: () => ({
        url: '/context/get_contexts/',
        method: 'GET',
      }),
      providesTags: ['Contexts'],
      transformResponse: (response: { contexts: Contexts[] }) => response.contexts || [],
    }),
    downloadContext: builder.mutation<void, string>({
      query: (filename) => ({
        url: '/context/download_context',
        method: 'POST',
        params: {
          filename,
        }
      }),
    }),
    clearContext: builder.mutation<void, number>({
      query: (id) => ({
        url: `/context/delete_context/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Chat', 'Contexts'],
    }),
  })
});

export const {
  useUploadContextMutation,
  useAllContextsQuery,
  useClearContextMutation,
  useDownloadContextMutation,
} = filesApi;
