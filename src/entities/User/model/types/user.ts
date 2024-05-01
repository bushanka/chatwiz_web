export interface User {
    access_token: string;
    // username: string;
    // avatar?: string;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
