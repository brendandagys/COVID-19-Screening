"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (id) => {
    var _a;
    return jsonwebtoken_1.default.sign({ id }, (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : 'fjdkeeijfd', {
        expiresIn: '30d',
    });
};
exports.default = generateToken;
//# sourceMappingURL=generateJWT.js.map