"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var submissionController_1 = require("../controllers/submissionController");
var authMiddleware_1 = require("../middleware/authMiddleware");
router.route('/').get(authMiddleware_1.protect, submissionController_1.getSubmission).post(authMiddleware_1.protect, submissionController_1.submitSubmission);
router
    .route('/email')
    .get(authMiddleware_1.protect, submissionController_1.checkForConfirmationEmail)
    .post(authMiddleware_1.protect, submissionController_1.sendConfirmationEmail);
exports.default = router;
//# sourceMappingURL=submissionRoutes.js.map