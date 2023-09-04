"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProductList_1 = __importDefault(require("../../components/Product/ProductList"));
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var MainPage = function () {
    return (react_1.default.createElement(styles_1.PageWrapper, null,
        react_1.default.createElement(ProductList_1.default, null)));
};
exports.default = MainPage;
