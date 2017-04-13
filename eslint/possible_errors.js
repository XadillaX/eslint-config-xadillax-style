/**
 * XadillaX <i@2333.moe> created at 2017-01-05 10:30:45 with ❤
 *
 * Copyright (c) 2017 xcoder.in, all rights reserved.
 */
"use strict";

module.exports = {
    rules: {
        // disallow `await` inside of loops
        "no-await-in-loop": "off",

        // disallow the use of `console`
        "no-console": "off",

        // disallow constant expressions in conditions
        "no-constant-condition": [ "error", {
            checkLoops: false
        }],

        // disallow empty block statements
        "no-empty": [ "error", {
            allowEmptyCatch: true
        }],

        // disallow calling some `Object.prototype` methods directly on objects
        "no-prototype-builtins": "off",

        // disallow multiple spaces in regular expressions
        "no-regex-spaces": "off",

        // disallow template literal placeholder syntax in regular strings
        "no-template-curly-in-string": "off",

        "no-extra-parens": [ "error", "all", {
            nestedBinaryExpressions: true,
            conditionalAssign: true,
            returnAssign: true,
            ignoreJSX: "all"
        }]
    }
};
