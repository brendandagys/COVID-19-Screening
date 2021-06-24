"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundHandler = void 0;
var notFoundHandler = function (req, res, next) {
    var error = new Error("Not Found - " + req.originalUrl);
    res.status(404);
    next(error);
};
exports.notFoundHandler = notFoundHandler;
var errorHandler = function (err, req, res, next) {
    console.log(err); // BACKEND ERROR LOG
    var statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorMiddleware.js.map