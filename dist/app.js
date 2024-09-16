"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./Utils/db"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = http_1.default.createServer(this.app);
        this.applyMiddleware();
        this.routes();
        (0, db_1.default)();
    }
    applyMiddleware() {
        this.app.use(express_1.default.json({ limit: "50mb" }));
        this.app.use((0, cors_1.default)());
    }
    routes() {
        // this.app.use('/api/auth');
        this.app.use((req, res, next) => {
            res.status(500).send('Something broke!');
        });
    }
    startServer(PORT) {
        this.server.listen(PORT, () => {
            console.log(`server is running  http://localhost:${PORT}`);
        });
    }
}
exports.default = App;
