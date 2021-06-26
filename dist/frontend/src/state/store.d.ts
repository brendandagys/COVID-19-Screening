declare const store: import("redux").Store<import("redux").EmptyObject & {
    authenticate: import("./reducers/userReducers").LoginState;
    registration: import("./reducers/userReducers").RegisterState;
    userDetails: import("./reducers/userReducers").UserDetailsState;
    userUpdate: import("./reducers/userReducers").UserUpdateState;
    questionsFetch: import("./reducers/questionReducers").QuestionsFetchState;
    submissionFetch: import("./reducers/submissionReducers").SubmissionFetchState;
    submissionCreate: import("./reducers/submissionReducers").SubmissionCreateState;
    emailFetch: import("./reducers/submissionReducers").EmailFetchState;
    emailCreate: import("./reducers/submissionReducers").EmailCreateState;
}, import("./actions").Action> & {
    dispatch: unknown;
};
export default store;
