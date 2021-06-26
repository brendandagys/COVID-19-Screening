import { Action } from '../actions';
import { ISubmission } from '../../../../backend/types';
export declare type SubmissionFetchState = {
    loading?: boolean;
    error?: string;
    submission: ISubmission | null;
    userResetFlag?: boolean;
};
export declare type SubmissionCreateState = {
    loading?: boolean;
    error?: string;
    submission: ISubmission | null;
};
export declare type EmailFetchState = {
    loading?: boolean;
    error?: string;
};
export declare type EmailCreateState = {
    loading?: boolean;
    error?: string;
};
export declare const submissionFetchReducer: (state: SubmissionFetchState | undefined, action: Action) => SubmissionFetchState;
export declare const submissionCreateReducer: (state: SubmissionCreateState | undefined, action: Action) => SubmissionCreateState;
export declare const emailFetchReducer: (state: EmailFetchState | undefined, action: Action) => EmailFetchState;
export declare const emailCreateReducer: (state: EmailCreateState | undefined, action: Action) => EmailCreateState;
