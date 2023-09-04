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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var productsThunks_1 = require("../../store/productsThunks");
var productSlice_1 = require("../../store/productSlice");
var styles_1 = require("./styles");
var ProductImages_tsx_1 = __importDefault(require("../ProductImages/ProductImages.tsx"));
var Trash_svg_1 = __importDefault(require("../../assets/images/Trash.svg"));
var Edit_svg_1 = __importDefault(require("../../assets/images/Edit.svg"));
var AddProductForm_1 = __importDefault(require("../AddProductForm/AddProductForm"));
var ModalWindow_1 = __importDefault(require("./components/ModalWindow/ModalWindow"));
var ProductList = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var productsData = (0, react_redux_1.useSelector)(function (state) { return state.products; });
    var _a = (0, react_1.useState)(''), searchQuery = _a[0], setSearchQuery = _a[1];
    var _b = (0, react_1.useState)('id'), sortBy = _b[0], setSortBy = _b[1];
    var _c = (0, react_1.useState)('asc'), sortOrder = _c[0], setSortOrder = _c[1];
    var _d = (0, react_1.useState)(false), modalOpen = _d[0], setModalOpen = _d[1];
    var originalProducts = productsData.products;
    (0, react_1.useEffect)(function () {
        dispatch((0, productsThunks_1.fetchProducts)());
    }, [dispatch]);
    var sortedProducts = __spreadArray([], originalProducts, true).sort(function (a, b) {
        if (sortOrder === 'asc') {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        }
        else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }
    });
    var handleDelete = function (productId) {
        dispatch((0, productSlice_1.deleteProduct)(productId));
    };
    var handleEdit = function (product) {
        dispatch((0, productSlice_1.editProduct)(product));
    };
    var filterProducts = function (products, query) {
        return products.filter(function (product) {
            var searchableFields = [product.title, product.description];
            var lowerCaseQuery = query.toLowerCase().trim();
            if (!lowerCaseQuery) {
                return true;
            }
            return searchableFields.some(function (field) { return field.toLowerCase().includes(lowerCaseQuery); });
        });
    };
    var handleSearch = function (e) {
        var query = e.target.value;
        setSearchQuery(query);
    };
    var handleSort = function (column) {
        if (column === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        }
        else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };
    var addProductToTable = function (newProduct) {
        dispatch((0, productSlice_1.addProduct)(newProduct));
    };
    var openModal = function () {
        setModalOpen(true);
    };
    var closeModal = function () {
        setModalOpen(false);
    };
    var filteredProducts = filterProducts(sortedProducts, searchQuery);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(styles_1.StyledInput, { type: "text", placeholder: "\u041F\u043E\u0448\u0443\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0456 \u0430\u0431\u043E \u0430\u0432\u0442\u043E\u0440\u0443", value: searchQuery, onChange: handleSearch }),
        react_1.default.createElement("div", null,
            react_1.default.createElement(styles_1.AddProductButton, { onClick: openModal }, "\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440")),
        modalOpen && (react_1.default.createElement(ModalWindow_1.default, { isOpen: modalOpen, onClose: closeModal },
            react_1.default.createElement(AddProductForm_1.default, { addProductToTable: addProductToTable }))),
        react_1.default.createElement(styles_1.Table, null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement(styles_1.Th, { onClick: function () { return handleSort('id'); } },
                        "ID ",
                        sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')),
                    react_1.default.createElement(styles_1.Th, { onClick: function () { return handleSort('title'); } },
                        "\u041D\u0430\u0437\u0432\u0430 ",
                        sortBy === 'title' && (sortOrder === 'asc' ? '▲' : '▼')),
                    react_1.default.createElement(styles_1.Th, { onClick: function () { return handleSort('author'); } },
                        "\u0410\u0432\u0442\u043E\u0440 ",
                        sortBy === 'author' && (sortOrder === 'asc' ? '▲' : '▼')),
                    react_1.default.createElement(styles_1.Th, { onClick: function () { return handleSort('year'); } },
                        "\u0426\u0456\u043D\u0430 ",
                        sortBy === 'year' && (sortOrder === 'asc' ? '▲' : '▼')),
                    react_1.default.createElement(styles_1.Th, null, "\u0424\u043E\u0442\u043E"),
                    react_1.default.createElement(styles_1.Th, { onClick: function () { return handleSort('rating'); } },
                        "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 ",
                        sortBy === 'rating' && (sortOrder === 'asc' ? '▲' : '▼')),
                    react_1.default.createElement(styles_1.Th, { onClick: function () { return handleSort('stock'); } },
                        "\u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456 ",
                        sortBy === 'stock' && (sortOrder === 'asc' ? '▲' : '▼')))),
            react_1.default.createElement("tbody", null, filteredProducts.map(function (product) { return (react_1.default.createElement("tr", { key: product.id },
                react_1.default.createElement(styles_1.Td, null, product.id),
                react_1.default.createElement(styles_1.Td, null, product.title),
                react_1.default.createElement(styles_1.Td, null, product.description),
                react_1.default.createElement(styles_1.Td, null, product.price),
                react_1.default.createElement(styles_1.TdPhoto, null,
                    react_1.default.createElement(ProductImages_tsx_1.default, { images: product.images })),
                react_1.default.createElement(styles_1.Td, null, product.rating),
                react_1.default.createElement(styles_1.Td, null, product.stock ? 'Так' : 'Ні'),
                react_1.default.createElement(styles_1.TdButtons, null,
                    react_1.default.createElement(styles_1.Button, { onClick: function () { return handleDelete(product.id); } },
                        react_1.default.createElement(styles_1.Img, { src: Trash_svg_1.default, alt: "Delete" })),
                    react_1.default.createElement(styles_1.Button, { onClick: function () { return handleEdit(product); } },
                        react_1.default.createElement(styles_1.Img, { src: Edit_svg_1.default, alt: "Edit" }))))); })))));
};
exports.default = ProductList;
