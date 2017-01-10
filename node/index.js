/**
 * XadillaX <i@2333.moe> created at 2016-12-29 16:19:37 with ❤
 *
 * Copyright (c) 2016 xcoder.in, all rights reserved.
 */
"use strict";

const _extends = [
    "base/possible_errors.js",
    "possible_errors.js",

    "base/best_practices.js",
    "best_practices.js",

    "base/variables.js",
    "variables.js",

    "stylistic.js"
].map(path => require.resolve(`../eslint/${path}`));
_extends.unshift("eslint:recommended");

module.exports = {
    extends: _extends,
    env: {
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true
        }
    }
};
