import { UserInfoWithPassword } from '../reducers/userReducers';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { LoginRequestAction, LoginSuccessAction, LoginFailAction, RegisterRequestAction, RegisterSuccessAction, RegisterFailAction, UserDetailsRequestAction, UserDetailsSuccessAction, UserDetailsFailAction, UserUpdateRequestAction, UserUpdateSuccessAction, UserUpdateFailAction, UserUpdateResetAction } from '../actions';
export declare const login: (username: string, password: string) => (dispatch: Dispatch<LoginRequestAction | LoginSuccessAction | LoginFailAction>) => Promise<void>;
export declare const logout: () => {
    type: ActionType;
};
export declare const register: (firstName: string, lastName: string, email: string, username: string, password: string) => (dispatch: Dispatch<RegisterRequestAction | RegisterSuccessAction | RegisterFailAction | LoginSuccessAction | UserUpdateResetAction>) => Promise<void>;
export declare const getUserDetails: (id: string) => (dispatch: Dispatch<UserDetailsRequestAction | UserDetailsSuccessAction | UserDetailsFailAction>, getState: any) => Promise<void>;
export declare const updateUser: (user: UserInfoWithPassword) => (dispatch: Dispatch<UserDetailsSuccessAction | UserUpdateRequestAction | UserUpdateSuccessAction | UserUpdateFailAction | UserUpdateResetAction>, getState: any) => Promise<void>;
