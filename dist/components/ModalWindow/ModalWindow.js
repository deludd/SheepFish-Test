"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Close_svg_1 = __importDefault(require("../../assets/images/Close.svg"));
var styles_1 = require("./styles");
var Modal = function (_a) {
    var onClose = _a.onClose, children = _a.children;
    var closeModal = function () {
        onClose();
    };
    var handleOverlayClick = function (e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };
    return (react_1.default.createElement(styles_1.ModalWrapper, { onClick: handleOverlayClick },
        react_1.default.createElement(styles_1.ModalContent, null,
            react_1.default.createElement(styles_1.Header, null,
                react_1.default.createElement(styles_1.CloseButton, { onClick: closeModal },
                    react_1.default.createElement(styles_1.CloseImage, { src: Close_svg_1.default, alt: "Close" }))),
            children)));
};
exports.default = Modal;
