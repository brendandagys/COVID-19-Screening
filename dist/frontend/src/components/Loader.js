"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Spinner_1 = __importDefault(require("react-bootstrap/Spinner"));
var Loader = function () {
    return (<Spinner_1.default animation='border' role='status' style={{
            width: '100px',
            height: '100px',
            margin: 'auto',
            display: 'block',
        }}></Spinner_1.default>);
};
exports.default = Loader;
//# sourceMappingURL=Loader.js.map