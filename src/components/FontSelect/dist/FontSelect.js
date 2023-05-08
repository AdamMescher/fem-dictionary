'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var Dropdown_1 = require("../Dropdown/Dropdown");
var Icon_1 = require("@/components/Icon");
var FontSelect_module_scss_1 = require("./FontSelect.module.scss");
var updateFontFamily = function (font) {
    switch (font) {
        case 'Sans Serif':
            return 'var(--font-family-sans-serif)';
        case 'Serif':
            return 'var(--font-family-serif)';
        case 'Mono':
            return 'var(--font-family-monospace)';
        default:
            return 'var(--font-family-sans-serif)';
    }
};
var FontSelect = function (_a) {
    var rest = __rest(_a, []);
    var _b = React.useState('Sans Serif'), fontType = _b[0], setFontType = _b[1];
    var handleSansSerif = function () {
        setFontType('Sans Serif');
        document.documentElement.style.setProperty('font-family', 'var(--font-family-sans-serif)');
        document.documentElement.style.setProperty('--small-underline', 'underline');
    };
    var handleSerif = function () {
        setFontType('Serif');
        document.documentElement.style.setProperty('font-family', 'var(--font-family-serif)');
        document.documentElement.style.setProperty('--small-underline', 'underline');
    };
    var handleMono = function () {
        setFontType('Mono');
        document.documentElement.style.setProperty('font-family', 'var(--font-family-monospace)');
        document.documentElement.style.setProperty('--small-underline', 'none');
    };
    var menu = [
        React.createElement("button", { key: 'sansSerif', onClick: handleSansSerif, style: { fontFamily: 'var(--font-family-sans-serif)' } }, "Sans Serif"),
        React.createElement("button", { key: 'serif', onClick: handleSerif, style: { fontFamily: 'var(--font-family-serif)' } }, "Serif"),
        React.createElement("button", { key: 'monospace', onClick: handleMono, style: { fontFamily: 'var(--font-family-monospace)' } }, "Mono"),
    ];
    var trigger = React.createElement("button", { style: { fontFamily: updateFontFamily(fontType) } },
        fontType,
        React.createElement(Icon_1["default"], { name: "arrow-down", color: "var(--color-primary-purple)", height: "24px", width: "24px" }));
    return (React.createElement("div", __assign({ className: FontSelect_module_scss_1["default"].wrapper }, rest),
        React.createElement(Dropdown_1["default"], { trigger: trigger, menu: menu })));
};
exports["default"] = FontSelect;
