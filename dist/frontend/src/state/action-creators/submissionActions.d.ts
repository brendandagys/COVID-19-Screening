import { Dispatch } from 'redux';
import { QuestionAnswer } from '../../../../backend/types';
import { ActionType } from '../action-types';
import { SubmissionFetchRequestAction, SubmissionFetchSuccessAction, SubmissionFetchFailAction, SubmissionCreateRequestAction, SubmissionCreateSuccessAction, SubmissionCreateFailAction, SubmissionFetchResetAction, SubmissionFetchFlagResetAction, EmailFetchRequestAction, EmailFetchSuccessAction, EmailFetchFailAction, EmailCreateRequestAction, EmailCreateSuccessAction, EmailCreateFailAction } from '../actions';
export declare const fetchSubmission: () => (dispatch: Dispatch<SubmissionFetchRequestAction | SubmissionFetchSuccessAction | SubmissionFetchFailAction>, getState: any) => Promise<void>;
export declare const clearSubmission: () => {
    type: ActionType;
};
export declare const createSubmission: (answers: QuestionAnswer[] | undefined, emailed: boolean) => (dispatch: Dispatch<SubmissionCreateRequestAction | SubmissionCreateSuccessAction | SubmissionCreateFailAction | SubmissionFetchSuccessAction | SubmissionFetchResetAction | SubmissionFetchFlagResetAction>, getState: any) => Promise<void>;
export declare const fetchEmail: () => (dispatch: Dispatch<EmailFetchRequestAction | EmailFetchSuccessAction | EmailFetchFailAction>, getState: any) => Promise<void>;
export declare const createEmail: (to: string, color: string, fontColor: string) => (dispatch: Dispatch<EmailCreateRequestAction | EmailCreateSuccessAction | EmailCreateFailAction | EmailFetchSuccessAction>, getState: any) => Promise<void>;
