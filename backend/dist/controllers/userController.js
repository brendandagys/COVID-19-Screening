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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = exports.authUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const User_1 = __importDefault(require("../models/User"));
const generateJWT_1 = __importDefault(require("../utils/generateJWT"));
// @desc    Authenticate user and get JWT
// @route   POST /api/users/login
// @access  Public
const authUser = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield User_1.default.findOne({
        username,
    });
    if (user && (yield user.matchPassword(password))) {
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
}));
exports.authUser = authUser;
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, username, password } = req.body;
    const usernameExists = yield User_1.default.findOne({
        username,
    });
    const emailExists = yield User_1.default.findOne({ email });
    if (usernameExists) {
        res.status(400);
        throw new Error('Username is already in use');
    }
    else if (emailExists) {
        res.status(400);
        throw new Error('Email is already in use');
    }
    const user = yield User_1.default.create({
        firstName,
        lastName,
        email,
        username,
        password,
    });
}));
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(req.user._id);
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
}));
exports.getUserProfile = getUserProfile;
//# sourceMappingURL=userController.js.map