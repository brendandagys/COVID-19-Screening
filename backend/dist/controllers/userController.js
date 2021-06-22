"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfile = exports.getUserProfile = exports.registerUser = exports.authenticateUser = void 0;
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var User_1 = __importDefault(require("../models/User"));
var generateJWT_1 = __importDefault(require("../utils/generateJWT"));
// @desc    Authenticate user and get JWT
// @route   POST /api/users/login
// @access  Public
exports.authenticateUser = express_async_handler_1.default(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, User_1.default.findOne({
                        username: username,
                    })];
            case 1:
                user = _c.sent();
                _b = user;
                if (!_b) return [3 /*break*/, 3];
                return [4 /*yield*/, user.matchPassword(password)];
            case 2:
                _b = (_c.sent());
                _c.label = 3;
            case 3:
                if (_b) {
                    res.json({
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username,
                        isAdministrator: user.isAdministrator,
                        token: generateJWT_1.default(user._id.toString()),
                    });
                }
                else {
                    res.status(401);
                    throw new Error('Invalid email or password');
                }
                return [2 /*return*/];
        }
    });
}); });
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
exports.registerUser = express_async_handler_1.default(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, email, username, password, usernameExists, emailExists, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, username = _a.username, password = _a.password;
                return [4 /*yield*/, User_1.default.findOne({
                        username: username,
                    })];
            case 1:
                usernameExists = _b.sent();
                return [4 /*yield*/, User_1.default.findOne({ email: email })];
            case 2:
                emailExists = _b.sent();
                if (usernameExists) {
                    res.status(400);
                    throw new Error('Username is already in use');
                }
                else if (emailExists) {
                    res.status(400);
                    throw new Error('Email is already in use');
                }
                return [4 /*yield*/, User_1.default.create({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        username: username,
                        password: password,
                    })];
            case 3:
                user = _b.sent();
                if (user) {
                    res.status(201).json({
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username,
                        isAdministrator: user.isAdministrator,
                        token: generateJWT_1.default(user._id.toString()),
                    });
                }
                else {
                    res.status(400);
                    throw new Error('Invalid credentials');
                }
                return [2 /*return*/];
        }
    });
}); });
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
exports.getUserProfile = express_async_handler_1.default(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User_1.default.findById(req.user._id)];
            case 1:
                user = _a.sent();
                if (user) {
                    res.json({
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username,
                        isAdministrator: user.isAdministrator,
                    });
                }
                else {
                    res.status(404);
                    throw new Error('User not found');
                }
                return [2 /*return*/];
        }
    });
}); });
// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
exports.updateUserProfile = express_async_handler_1.default(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, updatedUser;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, User_1.default.findById(req.user._id)];
            case 1:
                user = _f.sent();
                if (!user) return [3 /*break*/, 3];
                user.firstName = (_a = req.body.firstName) !== null && _a !== void 0 ? _a : user.firstName;
                user.lastName = (_b = req.body.lastName) !== null && _b !== void 0 ? _b : user.lastName;
                user.email = (_c = req.body.email) !== null && _c !== void 0 ? _c : user.email;
                user.username = (_d = req.body.username) !== null && _d !== void 0 ? _d : user.username;
                if (req.body.password) {
                    user.password = req.body.password;
                }
                user.isAdministrator = (_e = req.body.isAdministrator) !== null && _e !== void 0 ? _e : user.isAdministrator;
                return [4 /*yield*/, user.save()];
            case 2:
                updatedUser = _f.sent();
                res.json({
                    _id: updatedUser._id,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    email: updatedUser.email,
                    username: updatedUser.username,
                    isAdministrator: updatedUser.isAdministrator,
                    token: generateJWT_1.default(user._id.toString()),
                });
                return [3 /*break*/, 4];
            case 3:
                res.status(404);
                throw new Error('User not found');
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=userController.js.map