import { rtkApi } from "@/shared/api/rtkApi";

interface Chat {
  chat_id: number;
  chat_name: string;
  context_type: string;
  creation_date: string;
}

interface ChatInfo {
  url?: string;
  chat_name: string;
  context_type: 'pdf' | 'video' | 'site';
  message_history?: {
    chat?: [from: string, sms: string][]
  };
}

export const chatsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    allChats: builder.query<Chat[], void>({
      query: () => ({
        url: '/chats/get_chats/',
        method: 'GET',
      }),
      providesTags: ['AllChats'],
      transformResponse: (response: { chats: Chat[] }) => response.chats || [],
    }),
    chat: builder.query<ChatInfo, number>({
      query: (id) => ({
        url: '/chats/get_chatinfo/',
        method: 'GET',
        params: {
          chat_id: id,
        }
      }),
      providesTags: ['Chat'],
    }),
    clearChat: builder.mutation<void, number>({
      query: (id) => ({
        url: '/chats/delete_chat_message_history',
        method: 'POST',
        params: {
          chat_id: id,
        }
      }),
      invalidatesTags: ['Chat'],
    }),
    deleteChat: builder.mutation<void, number>({
      query: (id) => ({
        url: `/chats/delete_chat/${id}`,
        method: 'DELETE',
        params: {
          chat_id: id,
        }
      }),
      invalidatesTags: ['AllChats'],
    }),
    renameChat: builder.mutation<void, { id: number, name: string }>({
      query: ({ id, name }) => ({
        url: `/chats/change_chat_name/${id}`,
        method: 'POST',
        params: {
          new_name: name,
        }
      }),
      invalidatesTags: ['Chat', 'AllChats'],
    }),
    startNewChat: builder.mutation<Chat, { id?: number }>({
      query: ({ id }) => ({
        url: '/chats/start_new_chat',
        method: 'POST',
        params: {
          file_id: id,
        },
      }),
      invalidatesTags: ['AllChats'],
    }),
    sendQuestion: builder.mutation<void, { chat_id: number, question: string }>({
      query: ({ chat_id, question }) => ({
        url: '/chats/send_question',
        method: 'POST',
        params: {
          chat_id,
          question,
        },
      }),
      async onQueryStarted({ question }, { dispatch, queryFulfilled, getState }) {
          const key = Object.keys(getState().api.queries)
              .reverse()
              .find((el) => el.includes('chat('));
          const args = getState().api.queries[key || '']?.originalArgs as number;

          const patchCollection = dispatch(
            chatsApi.util.updateQueryData(
                  'chat',
                  args,
                  (draftPosts) => {
                      draftPosts.message_history?.chat?.push(
                        [
                            "human",
                            question,
                        ]
                      )
                  },
              ),
          );
          try {
              await queryFulfilled;
          } catch {
              patchCollection.undo();
          }
      },
      invalidatesTags: ['Chat'],
    }),
  })
});

export const {
  useAllChatsQuery,
  useChatQuery,
  useRenameChatMutation,
  useClearChatMutation,
  useDeleteChatMutation,
  useStartNewChatMutation,
  useSendQuestionMutation,
} = chatsApi;
