export declare const useActions: () => {
    fetchSubmission: () => (dispatch: import("redux").Dispatch<import("../state/actions").SubmissionFetchRequestAction | import("../state/actions").SubmissionFetchSuccessAction | import("../state/actions").SubmissionFetchFailAction>, getState: any) => Promise<void>;
    clearSubmission: () => {
        type: import("../state/action-types").ActionType;
    };
    createSubmission: (answers: import("../../../backend/types").QuestionAnswer[] | undefined, emailed: boolean) => (dispatch: import("redux").Dispatch<import("../state/actions").SubmissionFetchSuccessAction | import("../state/actions").SubmissionFetchResetAction | import("../state/actions").SubmissionFetchFlagResetAction | import("../state/actions").SubmissionCreateRequestAction | import("../state/actions").SubmissionCreateSuccessAction | import("../state/actions").SubmissionCreateFailAction>, getState: any) => Promise<void>;
    fetchEmail: () => (dispatch: import("redux").Dispatch<import("../state/actions").EmailFetchRequestAction | import("../state/actions").EmailFetchSuccessAction | import("../state/actions").EmailFetchFailAction>, getState: any) => Promise<void>;
    createEmail: (to: string, color: string, fontColor: string) => (dispatch: import("redux").Dispatch<import("../state/actions").EmailFetchSuccessAction | import("../state/actions").EmailCreateRequestAction | import("../state/actions").EmailCreateSuccessAction | import("../state/actions").EmailCreateFailAction>, getState: any) => Promise<void>;
    getQuestions: () => (dispatch: import("redux").Dispatch<import("../state/actions").QuestionsFetchRequestAction | import("../state/actions").QuestionsFetchSuccessAction | import("../state/actions").QuestionsFetchFailAction>, getState: any) => Promise<void>;
    login: (username: string, password: string) => (dispatch: import("redux").Dispatch<import("../state/actions").LoginRequestAction | import("../state/actions").LoginSuccessAction | import("../state/actions").LoginFailAction>) => Promise<void>;
    logout: () => {
        type: import("../state/action-types").ActionType;
    };
    register: (firstName: string, lastName: string, email: string, username: string, password: string) => (dispatch: import("redux").Dispatch<import("../state/actions").LoginSuccessAction | import("../state/actions").RegisterRequestAction | import("../state/actions").RegisterSuccessAction | import("../state/actions").RegisterFailAction | import("../state/actions").UserUpdateResetAction>) => Promise<void>;
    getUserDetails: (id: string) => (dispatch: import("redux").Dispatch<import("../state/actions").UserDetailsRequestAction | import("../state/actions").UserDetailsSuccessAction | import("../state/actions").UserDetailsFailAction>, getState: any) => Promise<void>;
    updateUser: (user: import("../state/reducers/userReducers").UserInfoWithPassword) => (dispatch: import("redux").Dispatch<import("../state/actions").UserDetailsSuccessAction | import("../state/actions").UserUpdateRequestAction | import("../state/actions").UserUpdateSuccessAction | import("../state/actions").UserUpdateFailAction | import("../state/actions").UserUpdateResetAction>, getState: any) => Promise<void>;
};
