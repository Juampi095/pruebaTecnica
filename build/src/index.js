"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var app_1 = __importDefault(require("./app"));
var PORT = process.env.PORT || 3000;
var server = http_1.default.createServer(app_1.default);
var startServer = function () {
    server.listen({
        port: PORT,
        hostname: "0.0.0.0",
        listeningListener: function () {
            console.log("Server running on http://localhost:".concat(PORT));
        }
    });
};
startServer();
