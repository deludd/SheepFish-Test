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
var formik_1 = require("formik");
var Yup = __importStar(require("yup"));
var styles_1 = require("./styles");
var InputField_1 = __importDefault(require("components/InputField/InputField"));
var initialValues = {
    title: '',
    description: '',
    price: '',
    rating: '',
};
var validationSchema = Yup.object({
    title: Yup.string().required('Назва товару обовʼязкова'),
    description: Yup.string().required('Автор обовʼязковий'),
    price: Yup.number()
        .typeError('Ціна повинна бути числом')
        .positive('Ціна повинна бути позитивним числом')
        .integer('Ціна повинна бути цілим числом')
        .required('Ціна обовʼязкова'),
    rating: Yup.number()
        .typeError('Рейтинг повинен бути числом')
        .min(1, 'Мінімальний рейтинг - 1')
        .max(5, 'Максимальний рейтинг - 5')
        .required('Рейтинг обовʼязковий'),
});
var AddProductForm = function (_a) {
    var addProductToTable = _a.addProductToTable;
    var _b = (0, react_1.useState)(false), formSubmitted = _b[0], setFormSubmitted = _b[1];
    var handleSubmit = function (values, _a) {
        var resetForm = _a.resetForm;
        values.images = ['https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg'];
        addProductToTable(values);
        setFormSubmitted(true);
        resetForm();
    };
    return (react_1.default.createElement("div", null, formSubmitted ? (react_1.default.createElement(styles_1.SuccessMessage, null,
        react_1.default.createElement("h2", null, "\u0422\u043E\u0432\u0430\u0440 \u0431\u0443\u043B\u043E \u0434\u043E\u0434\u0430\u043D\u043E!"))) : (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "\u0414\u043E\u0434\u0430\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u0442\u043E\u0432\u0430\u0440"),
        react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: handleSubmit },
            react_1.default.createElement(formik_1.Form, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement(InputField_1.default, { label: "\u041D\u0430\u0437\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u0443", name: "title", type: "text" }),
                    react_1.default.createElement(InputField_1.default, { label: "\u0410\u0432\u0442\u043E\u0440", name: "description", type: "text" }),
                    react_1.default.createElement(InputField_1.default, { label: "\u0426\u0456\u043D\u0430", name: "price", type: "number" }),
                    react_1.default.createElement(InputField_1.default, { label: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433", name: "rating", type: "number" })),
                react_1.default.createElement(styles_1.ButtonWrapper, null,
                    react_1.default.createElement(styles_1.StyledButton, { type: "submit" }, "\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440"))))))));
};
exports.default = AddProductForm;
