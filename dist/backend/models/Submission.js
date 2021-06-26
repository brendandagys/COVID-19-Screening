"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var questionAnswerSchema = new mongoose_1.Schema({
    question: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Question',
    },
    answer: {
        type: String,
        required: true,
    },
});
var submissionSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    answers: [questionAnswerSchema],
    emailed: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});
var Submission = mongoose_1.model('Submission', submissionSchema);
exports.default = Submission;
//# sourceMappingURL=Submission.js.map