'use client';
"use strict";
exports.__esModule = true;
var React = require("react");
var Icon_1 = require("@/components/Icon");
var Search_module_scss_1 = require("./Search.module.scss");
var Search = function (_a) {
    var handleSubmit = _a.handleSubmit;
    var _b = React.useState(''), searchInput = _b[0], setSearchInput = _b[1];
    var _c = React.useState(false), error = _c[0], setError = _c[1];
    var handleChange = function (event) {
        if (event.target.value === '')
            setError(true);
        if (event.target.value !== '')
            setError(false);
        setSearchInput(event.target.value);
    };
    var handleKeydown = function (event) {
        if (event.key === 'Enter') {
            if (!searchInput.length)
                setError(true);
            if (searchInput.length)
                setError(false);
        }
    };
    var handleClick = function (event) {
        event.preventDefault();
        if (searchInput === '')
            setError(true);
        if (searchInput !== '')
            setError(false);
    };
    return (React.createElement("div", { className: Search_module_scss_1["default"].wrapper, "data-testid": "search" },
        React.createElement("input", { type: "text", placeholder: "Search for any word...", required: true, onChange: handleChange, onKeyDown: handleKeydown }),
        React.createElement("button", { onClick: handleClick },
            React.createElement(Icon_1["default"], { name: "search", height: "24px", width: "24px", color: "var(--color-primary-purple)" })),
        error ? React.createElement("div", { className: Search_module_scss_1["default"].error }, "Whoops, can't be empty\u2026") : React.createElement("div", { className: Search_module_scss_1["default"].empty })));
};
exports["default"] = Search;
