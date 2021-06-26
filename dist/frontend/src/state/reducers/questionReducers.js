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
exports.questionsFetchReducer = void 0;
var action_types_1 = require("../action-types");
var questionsFetchReducer = function (state, action) {
    if (state === void 0) { state = { questions: null }; }
    switch (action.type) {
        case action_types_1.ActionType.QUESTIONS_FETCH_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case action_types_1.ActionType.QUESTIONS_FETCH_SUCCESS:
            return { questions: action.payload };
        case action_types_1.ActionType.QUESTIONS_FETCH_FAIL:
            return { error: action.payload.error, questions: null };
        default:
            return state;
    }
};
exports.questionsFetchReducer = questionsFetchReducer;
//# sourceMappingURL=questionReducers.js.map