"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var questionReducers_1 = require("./questionReducers");
var submissionReducers_1 = require("./submissionReducers");
var userReducers_1 = require("./userReducers");
var reducers = redux_1.combineReducers({
    authenticate: userReducers_1.authenticateReducer,
    registration: userReducers_1.registerReducer,
    userDetails: userReducers_1.userDetailsReducer,
    userUpdate: userReducers_1.userUpdateReducer,
    questionsFetch: questionReducers_1.questionsFetchReducer,
    submissionFetch: submissionReducers_1.submissionFetchReducer,
    submissionCreate: submissionReducers_1.submissionCreateReducer,
    emailFetch: submissionReducers_1.emailFetchReducer,
    emailCreate: submissionReducers_1.emailCreateReducer,
});
exports.default = reducers;
//# sourceMappingURL=index.js.map