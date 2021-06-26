declare const reducers: import("redux").Reducer<import("redux").CombinedState<{
    authenticate: import("./userReducers").LoginState;
    registration: import("./userReducers").RegisterState;
    userDetails: import("./userReducers").UserDetailsState;
    userUpdate: import("./userReducers").UserUpdateState;
    questionsFetch: import("./questionReducers").QuestionsFetchState;
    submissionFetch: import("./submissionReducers").SubmissionFetchState;
    submissionCreate: import("./submissionReducers").SubmissionCreateState;
    emailFetch: import("./submissionReducers").EmailFetchState;
    emailCreate: import("./submissionReducers").EmailCreateState;
}>, import("../actions").Action>;
export default reducers;
export declare type RootState = ReturnType<typeof reducers>;
