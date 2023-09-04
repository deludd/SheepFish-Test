"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("./styles");
var react_router_dom_1 = require("react-router-dom");
var arrow_back_icon_svg_1 = __importDefault(require("../../assets/images/arrow_back_icon.svg"));
var NavBar = function () {
    var location = (0, react_router_dom_1.useLocation)();
    return (React.createElement(styles_1.Header, { className: 'header' }, location.pathname !== '/' &&
        React.createElement(styles_1.Arrow, { to: "/" },
            React.createElement("img", { src: arrow_back_icon_svg_1.default, alt: "Back" }))));
};
exports.default = NavBar;
