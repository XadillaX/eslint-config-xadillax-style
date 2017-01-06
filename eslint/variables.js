/**
 * XadillaX <i@2333.moe> created at 2017-01-06 10:46:50 with ❤
 *
 * Copyright (c) 2017 xcoder.in, all rights reserved.
 */
"use strict";

module.exports = {
    rules: {
        // require or disallow initialization in variable declarations
        "init-declarations": "off",

        // disallow variable declarations from shadowing variables declared in the outer scope
        "no-shadow": [ "error", {
            hoist: "never",
            builtinGlobals: true
        } ],

        // disallow unused variables
        "no-unused-vars": [ "error", {
            argsIgnorePattern: "^_",
            caughtErrors: "none"
        } ],

        // require return statements after callbacks
        "callback-return": [
            "error", [
                "callback",
                "cb",
                "done",
                "res.send",
                "resp.send",
                "res.error",
                "resp.error",
                "res.render",
                "resp.render",
                "res.success",
                "resp.success"
            ]
        ],

        // require require() calls to be placed at top-level module scope
        "global-require": "off",

        // require error handling in callbacks
        "handle-callback-err": [ "error", "^(err|error|e)$" ],

        // disallow require calls to be mixed with regular variable declarations
        "no-mixed-requires": [ "error", {
            allowCall: true,
            grouping: true
        } ],

        // disallow the use of process.env
        "no-process-env": "off",

        // disallow the use of process.exit()
        "no-process-exit": "off",

        // disallow specified modules when loaded by require
        "no-restricted-modules": "off",

        // disallow synchronous methods
        "no-sync": "off"
    }
};
