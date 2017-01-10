/**
 * XadillaX <i@2333.moe> created at 2017-01-06 11:41:38 with ❤
 *
 * Copyright (c) 2017 xcoder.inc     rights reserved.
 */
"use strict";

module.exports = {
    rules: {
        // enforce consistent spacing inside array brackets
        "array-bracket-spacing": [ "error", "always", {
            objectsInArrays: false,
            arraysInArrays: false
        }],

        // enforce consistent spacing inside single-line blocks
        "block-spacing": [ "error", "always" ],

        // enforce consistent brace style for blocks
        "brace-style": [ "error", "1tbs", {
            allowSingleLine: true
        }],

        // enforce camelcase naming convention
        "camelcase": [ "error", {
            properties: "always"
        }],

        // enforce or disallow capitalization of the first letter of a comment
        "capitalized-comments": "off",

        // require or disallow trailing commas
        "comma-dangle": [ "error", "never" ],

        // enforce consistent spacing before and after commas
        "comma-spacing": [ "error", {
            before: false,
            after: true
        }],

        // enforce consistent comma style
        "comma-style": [ "error", "last" ],

        // enforce consistent spacing inside computed property brackets
        "computed-property-spacing": [ "error", "never" ],

        // enforce consistent naming when capturing the current execution context
        "consistent-this": [ "error", "self" ],

        // require or disallow newline at the end of files
        "eol-last": [ "error", "always" ],

        // require or disallow spacing between function identifiers and their invocations
        "func-call-spacing": [ "error", "never" ],

        // require function names to match the name of the variable or property to which they are assigned
        "func-name-matching": [ "error", "always" ],

        // require or disallow named function expressions
        "func-names": "off",

        // enforce the consistent use of either function declarations or expressions
        "func-style": "off",

        // disallow specified identifiers
        "id-blacklist": "off",

        // enforce minimum and maximum identifier lengths
        "id-length": "off",

        // require identifiers to match a specified regular expression
        "id-match": "off",

        // enforce consistent indentation
        "indent": [ "error", 4 ],

        // enforce the consistent use of either double or single quotes in JSX attributes
        "jsx-quotes": [ "error", "prefer-double" ],

        // enforce consistent spacing between keys and values in object literal properties
        "key-spacing": [ "error", {
            beforeColon: false,
            afterColon: true,
            mode: "strict"
        }],

        // enforce consistent spacing before and after keywords
        "keyword-spacing": [ "error", {
            before: true,
            after: true,
            overrides: {
                "if": { after: false },
                "for": { after: false },
                "while": { after: false },
                "catch": { after: false },
                "switch": { after: false }
            }
        }],

        // enforce position of line comments
        "line-comment-position": "off",

        // enforce consistent linebreak style
        "linebreak-style": [ "error", "unix" ],

        // require empty lines around comments
        "lines-around-comment": [ "error", {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowBlockEnd: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            allowArrayStart: true,
            allowArrayEnd: true
        }],

        // require or disallow newlines around directives
        "lines-around-directive": [ "error", {
            before: "never",
            after: "always"
        }]
    }
};
