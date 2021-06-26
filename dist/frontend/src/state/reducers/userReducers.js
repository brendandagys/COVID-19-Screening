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
exports.userUpdateReducer = exports.userDetailsReducer = exports.registerReducer = exports.authenticateReducer = void 0;
var action_types_1 = require("../action-types");
var authenticateReducer = function (state, action) {
    if (state === void 0) { state = { userInfo: null }; }
    switch (action.type) {
        case action_types_1.ActionType.LOGIN_REQUEST:
            return { loading: true, userInfo: null };
        case action_types_1.ActionType.LOGIN_SUCCESS:
            return { userInfo: action.payload.userInfo };
        case action_types_1.ActionType.LOGIN_FAIL:
            return { error: action.payload.error, userInfo: null };
        case action_types_1.ActionType.LOGOUT:
            return { userInfo: null };
        default:
            return state;
    }
};
exports.authenticateReducer = authenticateReducer;
var registerReducer = function (state, action) {
    if (state === void 0) { state = { userInfo: null }; }
    switch (action.type) {
        case action_types_1.ActionType.REGISTER_REQUEST:
            return { loading: true, userInfo: null };
        case action_types_1.ActionType.REGISTER_SUCCESS:
            return { userInfo: action.payload.userInfo };
        case action_types_1.ActionType.REGISTER_FAIL:
            return { error: action.payload.error, userInfo: null };
        default:
            return state;
    }
};
exports.registerReducer = registerReducer;
var userDetailsReducer = function (state, action) {
    if (state === void 0) { state = { userInfo: null }; }
    switch (action.type) {
        case action_types_1.ActionType.USER_DETAILS_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case action_types_1.ActionType.USER_DETAILS_SUCCESS:
            return { userInfo: action.payload.userInfo };
        case action_types_1.ActionType.USER_DETAILS_FAIL:
            return { error: action.payload.error, userInfo: null };
        default:
            return state;
    }
};
exports.userDetailsReducer = userDetailsReducer;
var userUpdateReducer = function (state, action) {
    if (state === void 0) { state = { userInfo: null }; }
    switch (action.type) {
        case action_types_1.ActionType.USER_UPDATE_REQUEST:
            return { loading: true, userInfo: null };
        case action_types_1.ActionType.USER_UPDATE_SUCCESS:
            return { userInfo: action.payload.userInfo };
        case action_types_1.ActionType.USER_UPDATE_FAIL:
            return { error: action.payload.error, userInfo: null };
        case action_types_1.ActionType.USER_UPDATE_RESET:
            return { userInfo: null };
        default:
            return state;
    }
};
exports.userUpdateReducer = userUpdateReducer;
//# sourceMappingURL=userReducers.js.map