import { rtkApi } from "@/shared/api/rtkApi";

interface Response {
  indepotence_key: string;
  confirmation_token: string;
}

interface ResponsePlan {
  id: number;
  price: number;
  max_context_amount: number;
  name: string;
  max_context_size: number;
  max_question_length: number;
  max_action_points: number;
}

export const upgradePlanApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    createpay: builder.mutation<Response, number>({
      query: (id) => ({
        url: '/billing/createpay/',
        method: 'POST',
        params: {
          subscription_plan_id : id, 
        }
      }),
    }),
    subscriptionPlans: builder.query<ResponsePlan[], void>({
      query: (id) => ({
        url: '/billing/get_subscription_plans_prices_and_ids',
        method: 'GET',
      }),
    }),
  })
});

export const {
  useCreatepayMutation,
  useSubscriptionPlansQuery,
} = upgradePlanApi;
