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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var sendEmail = function (to, color) { return __awaiter(void 0, void 0, void 0, function () {
    var smtpTransport, mailOptions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                smtpTransport = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env.SCREENING_GMAIL_USERNAME,
                        pass: process.env.SCREENING_GMAIL_PASSWORD,
                    },
                });
                mailOptions = {
                    from: process.env.GMAIL_USERNAME,
                    to: to,
                    subject: new Date().toISOString().slice(0, 10) + ' COVID-19 Screening',
                    html: "\n    <div style=\"background-color: '" + color + "'; text-align: 'center'>\n      Self-Assessment Results<br />\n\n      For: " + to + "<br />\n\n      Assessment completed Wendesday, " + new Date().toDateString() + ", " + new Date()
                        .toTimeString()
                        .slice(0, 5) + "<br />\n\n      You are cleared to work. Please be prepared to show this confirmation at staff entrance point when reporting for your shift.<br />\n\n      Confidentiality Notice: The contents of this email, including any attachments, may contain confidential information, personal and/or health information intended to be reviewed only by the individual(s) or organization to whom it is addressed.<br />\n\n      If you are not the intended recipient or an authorized representative of the intended recipient, please be notified that any review, distribution, copying, saving, or disclosure is strictly prohibited. If you have received this email in error, please immediately notify the sender by return email and delete this email from your system, including from the deleted items folder. Thank you for your cooperation.\n    </div>\n    ",
                };
                return [4 /*yield*/, smtpTransport.sendMail(mailOptions)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendEmail.js.map