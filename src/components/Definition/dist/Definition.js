"use strict";
exports.__esModule = true;
var React = require("react");
var Icon_1 = require("@/components/Icon");
var Definition_module_scss_1 = require("./Definition.module.scss");
var Meaning = function (_a) {
    var partOfSpeech = _a.partOfSpeech, definitions = _a.definitions, synonyms = _a.synonyms, antonyms = _a.antonyms;
    return (React.createElement("div", { className: Definition_module_scss_1["default"].meaning },
        React.createElement("div", { className: Definition_module_scss_1["default"]['speech-divider'] },
            React.createElement("p", { className: Definition_module_scss_1["default"]['part-of-speech'] },
                React.createElement("strong", null,
                    React.createElement("em", null, partOfSpeech))),
            React.createElement("hr", null)),
        React.createElement("div", null,
            React.createElement("p", { className: Definition_module_scss_1["default"]['meaning-heading'] }, "Meaning"),
            React.createElement("ul", null, definitions.map(function (def) { return React.createElement("li", { key: def.definition.slice(1, 10) }, def.definition); }))),
        synonyms.length >= 1 ? React.createElement("p", null,
            "Synonyms: ",
            synonyms.join(', ')) : null,
        antonyms.length >= 1 ? React.createElement("p", null,
            "Antonyms: ",
            antonyms.join(', ')) : null));
};
var Definition = function (_a) {
    var word = _a.word, phonetic = _a.phonetic, meanings = _a.meanings, sourceUrls = _a.sourceUrls;
    return (React.createElement("div", { className: Definition_module_scss_1["default"].wrapper },
        React.createElement("article", { "data-testid": "definition" },
            React.createElement("div", { className: Definition_module_scss_1["default"].heading },
                React.createElement("div", null,
                    React.createElement("h1", null, word),
                    React.createElement("h2", { className: Definition_module_scss_1["default"].phonetic }, phonetic)),
                React.createElement("button", { className: Definition_module_scss_1["default"]['play-button'] },
                    React.createElement(Icon_1["default"], { id: "play", height: "48px", width: "48px", color: "var(--color-primary-purple)" }))),
            meanings.map(function (meaning) {
                return React.createElement(Meaning, { key: meaning.partOfSpeech, partOfSpeech: meaning.partOfSpeech, definitions: meaning.definitions, synonyms: meaning.synonyms, antonyms: meaning.antonyms });
            }),
            React.createElement("div", null,
                React.createElement("hr", null)),
            React.createElement("div", { className: Definition_module_scss_1["default"].source },
                React.createElement("p", null,
                    "source: ",
                    sourceUrls.join(', '))))));
};
exports["default"] = Definition;
