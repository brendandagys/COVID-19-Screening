"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailCreateReducer = exports.emailFetchReducer = exports.submissionCreateReducer = exports.submissionFetchReducer = void 0;
var action_types_1 = require("../action-types");
var submissionFetchReducer = function (state, action) {
    if (state === void 0) { state = { submission: null }; }
    switch (action.type) {
        case action_types_1.ActionType.SUBMISSION_FETCH_REQUEST:
            return __assign(__assign({}, state), { loading: true, submission: null });
        case action_types_1.ActionType.SUBMISSION_FETCH_SUCCESS:
            return __assign(__assign({}, state), { error: undefined, loading: false, submission: action.payload });
        case action_types_1.ActionType.SUBMISSION_FETCH_FAIL:
            return { error: action.payload.error, submission: null };
        case action_types_1.ActionType.SUBMISSION_FETCH_RESET:
            return __assign(__assign({}, state), { userResetFlag: true });
        case action_types_1.ActionType.SUBMISSION_FETCH_FLAG_RESET:
            return __assign(__assign({}, state), { userResetFlag: false });
        default:
            return state;
    }
};
exports.submissionFetchReducer = submissionFetchReducer;
var submissionCreateReducer = function (state, action) {
    if (state === void 0) { state = { submission: null }; }
    switch (action.type) {
        case action_types_1.ActionType.SUBMISSION_CREATE_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case action_types_1.ActionType.SUBMISSION_CREATE_SUCCESS:
            return { submission: action.payload };
        case action_types_1.ActionType.SUBMISSION_CREATE_FAIL:
            return { error: action.payload.error, submission: null };
        default:
            return state;
    }
};
exports.submissionCreateReducer = submissionCreateReducer;
var emailFetchReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case action_types_1.ActionType.EMAIL_FETCH_REQUEST:
            return { loading: true };
        case action_types_1.ActionType.EMAIL_FETCH_SUCCESS:
            return { loading: false };
        case action_types_1.ActionType.EMAIL_FETCH_FAIL:
            return { error: action.payload.error };
        default:
            return state;
    }
};
exports.emailFetchReducer = emailFetchReducer;
var emailCreateReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case action_types_1.ActionType.EMAIL_CREATE_REQUEST:
            return { loading: true };
        case action_types_1.ActionType.EMAIL_CREATE_SUCCESS:
            return { loading: false };
        case action_types_1.ActionType.EMAIL_CREATE_FAIL:
            return { error: action.payload.error };
        default:
            return state;
    }
};
exports.emailCreateReducer = emailCreateReducer;
//# sourceMappingURL=submissionReducers.js.map