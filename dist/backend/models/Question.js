"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var questionSchema = new mongoose_1.Schema({
    question: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    answerOptions: {
        type: [String],
    },
}, {
    timestamps: true,
});
var Question = mongoose_1.model('Question', questionSchema);
exports.default = Question;
//# sourceMappingURL=Question.js.map