"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var errorMiddleware_1 = require("./middleware/errorMiddleware");
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var questionRoutes_1 = __importDefault(require("./routes/questionRoutes"));
var submissionRoutes_1 = __importDefault(require("./routes/submissionRoutes"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + '/../.env' });
var database_1 = __importDefault(require("./config/database"));
database_1.default();
var app = express_1.default();
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.use('/api/questions', questionRoutes_1.default);
app.use('/api/submissions', submissionRoutes_1.default);
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like our main.js or main.css file
    app.use(express_1.default.static(path_1.default.join(__dirname, '/frontend/build')));
    // Express will serve up the index.html file if it doesn't recognize the route
    app.get('*', function (req, res) {
        res.sendFile(path_1.default.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}
else {
    app.get('/', function (req, res) {
        res.send('Server is running...');
    });
}
// Custom error middleware
app.use(errorMiddleware_1.notFoundHandler);
app.use(errorMiddleware_1.errorHandler);
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
app.listen(PORT, function () {
    return console.log("Server running in " + process.env.NODE_ENV + " on port " + PORT + "...");
});
//# sourceMappingURL=server.js.map