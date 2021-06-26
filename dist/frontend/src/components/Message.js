"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Alert_1 = __importDefault(require("react-bootstrap/Alert"));
var Message = function (_a) {
    var variant = _a.variant, children = _a.children;
    return <Alert_1.default variant={variant}>{children}</Alert_1.default>;
};
exports.default = Message;
//# sourceMappingURL=Message.js.map