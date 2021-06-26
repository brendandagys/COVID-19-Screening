"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var questionController_1 = require("../controllers/questionController");
var authMiddleware_1 = require("../middleware/authMiddleware");
router.route('/').get(authMiddleware_1.protect, questionController_1.getQuestions);
exports.default = router;
//# sourceMappingURL=questionRoutes.js.map