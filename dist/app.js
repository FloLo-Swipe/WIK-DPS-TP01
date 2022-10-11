"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PING_LISTEN_PORT = 3000;
app.get('/ping', (req, res) => {
    res.send(req.headers);
    res.set({ 'Content-Type': 'application/json' });
});
app.get('*', (req, res) => {
    res.sendStatus(404);
});
app.listen(PING_LISTEN_PORT, () => {
    return console.log(`Express is listening at http://localhost:${PING_LISTEN_PORT}`);
});
//# sourceMappingURL=app.js.map