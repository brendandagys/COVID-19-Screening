"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var reducers_1 = __importDefault(require("./reducers"));
var userInfoStringFromStorage = localStorage.getItem('userInfo');
// Coerce the null returned from .getItem() into {}
var userInfoFromStorage = userInfoStringFromStorage
    ? JSON.parse(userInfoStringFromStorage)
    : null;
var initialState = {
    authenticate: { userInfo: userInfoFromStorage },
};
var store = redux_1.createStore(reducers_1.default, initialState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
exports.default = store;
//# sourceMappingURL=store.js.map