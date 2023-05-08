'use client';
"use strict";
exports.__esModule = true;
var React = require("react");
var next_themes_1 = require("next-themes");
var Switch = require("@radix-ui/react-switch");
var Icon_1 = require("@/components/Icon");
var ThemeToggle_module_scss_1 = require("./ThemeToggle.module.scss");
var ThemeToggle = function (_a) {
    var _b = React.useState(false), mounted = _b[0], setMounted = _b[1];
    var _c = React.useState(false), enabled = _c[0], setEnabled = _c[1];
    var _d = next_themes_1.useTheme(), theme = _d.theme, setTheme = _d.setTheme;
    React.useEffect(function () {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    var handleCheckedChange = function () {
        setEnabled(!enabled);
        setTheme(enabled ? 'light' : 'dark');
    };
    return (React.createElement("div", { className: ThemeToggle_module_scss_1["default"].wrapper },
        React.createElement("div", { className: ThemeToggle_module_scss_1["default"]['theme-icon-container'] },
            React.createElement(Icon_1["default"], { name: "sun", color: "var(--color-neutral-gray-3)", className: "" + (enabled ? ThemeToggle_module_scss_1["default"]['theme-icon-hidden'] : ThemeToggle_module_scss_1["default"]['theme-icon-visible']) })),
        React.createElement(Switch.Root, { className: ThemeToggle_module_scss_1["default"]['switch-root'], id: "airplane-mode", onCheckedChange: handleCheckedChange },
            React.createElement(Switch.Thumb, { className: ThemeToggle_module_scss_1["default"]['switch-thumb'] })),
        React.createElement("div", { className: ThemeToggle_module_scss_1["default"]['theme-icon-container'] },
            React.createElement(Icon_1["default"], { name: "moon", color: "var(--color-primary-purple)", className: "" + (enabled ? ThemeToggle_module_scss_1["default"]['theme-icon-visible'] : ThemeToggle_module_scss_1["default"]['theme-icon-hidden']) }))));
};
exports["default"] = ThemeToggle;
