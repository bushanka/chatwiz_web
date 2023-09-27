import { rtkApi } from "@/shared/api/rtkApi";

interface Chat {
  id: number;
  name: string;
}

interface ChatInfo {
  pdf_url: string;
  chat_name: string;
  message_history: {
    chat: [from: string, sms: string][]
  };
}

export const chatsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    allChats: builder.query<Chat[], void>({
      query: () => ({
        url: '/chats/get_chats/',
        method: 'POST',
      }),
      providesTags: ['AllChats'],
      transformResponse: (response: { chats: Chat[] }) => response.chats || [],
    }),
    chat: builder.query<ChatInfo, number>({
      query: (id) => ({
        url: '/chats/get_chatinfo/',
        method: 'POST',
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
    startNewChat: builder.mutation<{ id: number }, { name: string, file: FormData }>({
      query: ({ name, file }) => ({
        url: '/chats/start_new_chat',
        method: 'POST',
        params: {
          chat_name: name,
        },
        body: file,
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
      invalidatesTags: ['Chat'],
    }),
  })
});

export const {
  useAllChatsQuery,
  useChatQuery,
  useClearChatMutation,
  useStartNewChatMutation,
  useSendQuestionMutation,
} = chatsApi;