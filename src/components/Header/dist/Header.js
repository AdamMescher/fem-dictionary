"use strict";
exports.__esModule = true;
var React = require("react");
var link_1 = require("next/link");
var Icon_1 = require("@/components/Icon");
var FontSelect_1 = require("../FontSelect/FontSelect");
var ThemeToggle_1 = require("@/components/ThemeToggle");
var Header_module_scss_1 = require("./Header.module.scss");
var Header = function (_a) {
    return (React.createElement("header", { className: Header_module_scss_1["default"].header },
        React.createElement(link_1["default"], { href: "#" },
            React.createElement(Icon_1["default"], { name: "logo", color: "var(--color-neutral-gray-3)", height: "32px", width: "32px" })),
        React.createElement("div", { className: Header_module_scss_1["default"].toggles },
            React.createElement(FontSelect_1["default"], null),
            React.createElement("span", null, "|"),
            React.createElement(ThemeToggle_1["default"], null))));
};
exports["default"] = Header;
