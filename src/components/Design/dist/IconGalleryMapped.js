"use strict";
exports.__esModule = true;
var React = require("react");
var blocks_1 = require("@storybook/blocks");
var Icon_1 = require("@/components/Icon");
var IconGalleryMapped = function (_a) {
    var icons = _a.icons;
    return (React.createElement(blocks_1.IconGallery, null, icons.map(function (icon) { return (React.createElement(blocks_1.IconItem, { key: icon.id, name: icon.id },
        React.createElement(Icon_1["default"], { name: icon.id }))); })));
};
exports["default"] = IconGalleryMapped;
