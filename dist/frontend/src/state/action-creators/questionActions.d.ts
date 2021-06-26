import { Dispatch } from 'redux';
import { QuestionsFetchRequestAction, QuestionsFetchSuccessAction, QuestionsFetchFailAction } from '../actions';
export declare const getQuestions: () => (dispatch: Dispatch<QuestionsFetchRequestAction | QuestionsFetchSuccessAction | QuestionsFetchFailAction>, getState: any) => Promise<void>;
