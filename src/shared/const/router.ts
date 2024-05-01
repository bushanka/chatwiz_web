import { AppRoutes } from "../types/router";

export const RoutePath: Record<AppRoutes, (...args: Array<string>) => string> = {
    [AppRoutes.MAIN]: () => '/',
    [AppRoutes.FEATURES]: () => '/features',
    [AppRoutes.SUPPORT]: () => '/support',
    [AppRoutes.FAQ]: () => '/faq',
    [AppRoutes.PRODUCT]: () => '/product',
    [AppRoutes.LOGIN]: () => '/login',
    [AppRoutes.REGISTER]: () => '/register',
    [AppRoutes.BLOG]: () => '/blog',
    [AppRoutes.ABOUT]: () => '/about',
    [AppRoutes.PRICING]: () => '/pricing',
    [AppRoutes.HOME]: () => '/home',
    [AppRoutes.HOME_ID]: (id: string) => `/home/${id}`,
    [AppRoutes.HOME_EDIT]: (id: string) => `/home/${id}/edit`,
    [AppRoutes.UPGRADE_PLAN]: () => '/upgrade_plan',
    [AppRoutes.CHATS]: () => '/chats',
    [AppRoutes.FILES]: () => '/files',
    [AppRoutes.FILE_VIEW]: (id: string) => `/files/${id}`,
    [AppRoutes.SETTINGS]: () => '/setting',
    [AppRoutes.FORBIDDEN]: () => '/forbidden',
    [AppRoutes.NOT_FOUND]: () => '*',
};
