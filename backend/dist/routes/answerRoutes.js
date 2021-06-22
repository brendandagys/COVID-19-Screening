"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var answerController_1 = require("../controllers/answerController");
var authMiddleware_1 = require("../middleware/authMiddleware");
router.route('/').get(authMiddleware_1.protect, answerController_1.getAnswer).post(authMiddleware_1.protect, answerController_1.submitAnswer);
exports.default = router;
//# sourceMappingURL=answerRoutes.js.map