import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    notAuthOnly?: boolean;
    withSidebar?: boolean;
    withFooter?: boolean;
};

export enum AppRoutes {
    MAIN = 'MAIN',
    FAQ = 'FAQ',
    SUPPORT = 'SUPPORT',
    PRODUCT = 'PRODUCT',
    REGISTER = 'REGISTER',
    LOGIN = 'LOGIN',
    FEATURES = 'FEATURES',
    BLOG = 'BLOG',
    ABOUT = 'ABOUT',
    PRICING = 'PRICING',
    HOME = 'HOME',
    HOME_EDIT = 'HOME_EDIT',
    HOME_ID = 'HOME_ID',
    UPGRADE_PLAN = 'UPGRADE_PLAN',
    CHATS = 'CHATS',
    FILES = 'FILES',
    FILE_VIEW = 'FILE_VIEW',
    SETTINGS = 'SETTINGS',
    FORBIDDEN = 'FORBIDDEN',
    // last
    NOT_FOUND = 'NOT_FOUND',
}