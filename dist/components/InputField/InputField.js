"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var formik_1 = require("formik");
var styles_1 = require("./styles");
var InputField = function (_a) {
    var label = _a.label, name = _a.name, type = _a.type;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("label", { htmlFor: name }, label),
        react_1.default.createElement(formik_1.Field, { as: styles_1.StyledInput, type: type, id: name, name: name }),
        react_1.default.createElement(formik_1.ErrorMessage, { name: name, component: styles_1.StyledErrorMessage })));
};
exports.default = InputField;
