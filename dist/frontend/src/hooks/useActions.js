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
exports.useActions = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var state_1 = require("../state");
var state_2 = require("../state");
var state_3 = require("../state");
var useActions = function () {
    var dispatch = react_redux_1.useDispatch();
    return react_1.useMemo(function () {
        return redux_1.bindActionCreators(__assign(__assign(__assign({}, state_1.userActionCreators), state_2.questionActionCreators), state_3.submissionActionCreators), dispatch);
    }, [dispatch]);
};
exports.useActions = useActions;
//# sourceMappingURL=useActions.js.map