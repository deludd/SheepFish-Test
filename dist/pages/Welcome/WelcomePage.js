"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var WelcomePage = function () {
    return (react_1.default.createElement(styles_1.PageWrapper, null,
        react_1.default.createElement(styles_1.Title, null, "Welcome to My Beautiful Website"),
        react_1.default.createElement(styles_1.Subtitle, null, "Explore and enjoy our content."),
        react_1.default.createElement(styles_1.Button, { to: "/main" }, "Go to the application")));
};
exports.default = WelcomePage;
