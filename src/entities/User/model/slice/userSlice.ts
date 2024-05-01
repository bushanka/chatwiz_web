import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';
import { UserSchema, User } from '../types/user';
import { removeCookie } from 'typescript-cookie';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            // выполняется при авторизации, приходят данные пользователя и токены
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
            // выполняется при перезагрузке странице если пользователь авторизован, и в session хранится user и acces token
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            removeCookie('access_token');
            removeCookie('refresh_token');
            // выход
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
