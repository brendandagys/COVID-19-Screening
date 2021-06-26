import { Action } from '../actions';
import { IQuestion } from '../../../../backend/types';
export declare type QuestionsFetchState = {
    loading?: boolean;
    error?: string;
    questions: IQuestion[] | null;
};
export declare const questionsFetchReducer: (state: QuestionsFetchState | undefined, action: Action) => QuestionsFetchState;
