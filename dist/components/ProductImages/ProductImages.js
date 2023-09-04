"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_responsive_carousel_1 = require("react-responsive-carousel");
require("react-responsive-carousel/lib/styles/carousel.min.css");
var View_svg_1 = __importDefault(require("../../assets/images/View.svg"));
var ModalWindow_1 = __importDefault(require("components/ModalWindow/ModalWindow"));
var styles_1 = require("./styles");
var ProductImages = function (_a) {
    var images = _a.images;
    var _b = (0, react_1.useState)(false), modalOpen = _b[0], setModalOpen = _b[1];
    var _c = (0, react_1.useState)(0), currentImageIndex = _c[0], setCurrentImageIndex = _c[1];
    var openModal = function (index) {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };
    var closeModal = function () {
        setCurrentImageIndex(0);
        setModalOpen(false);
    };
    return (react_1.default.createElement("div", null,
        images && images.length > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styles_1.ButtonWrapper, null,
                react_1.default.createElement(styles_1.ViewButton, { onClick: function () { return openModal(0); } },
                    react_1.default.createElement("img", { src: View_svg_1.default, alt: "View" }))),
            modalOpen && (react_1.default.createElement(ModalWindow_1.default, { isOpen: modalOpen, onClose: closeModal },
                react_1.default.createElement(styles_1.CarouselContainer, null,
                    react_1.default.createElement(react_responsive_carousel_1.Carousel, { selectedItem: currentImageIndex, showArrows: true, showThumbs: false, showStatus: false, showIndicators: false, infiniteLoop: true, useKeyboardArrows: true, onChange: function (index) { return setCurrentImageIndex(index); } }, images.map(function (image, index) { return (react_1.default.createElement("div", { key: index },
                        react_1.default.createElement(styles_1.Img, { src: image, alt: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 ".concat(index + 1) }))); }))))))),
        (!images || images.length === 0) && (react_1.default.createElement("div", null,
            react_1.default.createElement("img", { src: "path/to/empty-image-placeholder.png", alt: "Empty Image" })))));
};
exports.default = ProductImages;
