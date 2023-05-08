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
exports.__esModule = true;
exports.Default = void 0;
var React = require("react");
var Dropdown_1 = require("@/components/Dropdown");
var Icon_1 = require("@/components/Icon");
exports["default"] = {
    component: Dropdown_1["default"],
    title: 'Components/Dropdown',
    argTypes: { onClick: { action: 'clicked' } },
    decorators: [
        function (Story) { return (React.createElement("div", { style: { width: '200px', height: '200px', display: 'grid', justifyItems: 'center' } },
            React.createElement(Story, null))); }
    ]
};
exports.Default = {
    args: {
        trigger: React.createElement("button", { style: { fontFamily: 'var(--font-family-sans-serif)' } },
            "Sans Serif",
            React.createElement(Icon_1["default"], { name: "arrow-down", color: "var(--color-primary-purple)", height: "24px", width: "24px" })),
        menu: [
            React.createElement("button", { key: 'sans-serif', style: { fontFamily: 'var(--font-family-sans-serif)' } }, "Sans Serif"),
            React.createElement("button", { key: 'serif', style: { fontFamily: 'var(--font-family-serif)' } }, "Serif"),
            React.createElement("button", { key: 'monospace', style: { fontFamily: 'var(--font-family-monospace)' } }, "Mono"),
        ]
    },
    render: function (args) { return React.createElement(Dropdown_1["default"], __assign({}, args)); }
};
