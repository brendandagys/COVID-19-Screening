import { Action } from '../actions';
export declare type UserInfo = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    isAdministrator: boolean;
    token: string;
};
export declare type UserInfoWithPassword = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    isAdministrator: boolean;
};
export declare type LoginState = {
    loading?: boolean;
    error?: string;
    userInfo: UserInfo | null;
};
export declare type RegisterState = {
    loading?: boolean;
    error?: string;
    userInfo: UserInfo | null;
};
export declare type UserDetailsState = {
    loading?: boolean;
    error?: string;
    userInfo: UserInfo | null;
};
export declare type UserUpdateState = {
    loading?: boolean;
    error?: string;
    userInfo: UserInfo | null;
};
export declare const authenticateReducer: (state: LoginState | undefined, action: Action) => LoginState;
export declare const registerReducer: (state: RegisterState | undefined, action: Action) => RegisterState;
export declare const userDetailsReducer: (state: UserDetailsState | undefined, action: Action) => UserDetailsState;
export declare const userUpdateReducer: (state: UserUpdateState | undefined, action: Action) => UserUpdateState;
