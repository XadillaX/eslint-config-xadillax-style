/**
 * XadillaX <i@2333.moe> created at 2017-01-05 10:48:20 with ❤
 *
 * Copyright (c) 2017 xcoder.in, all rights reserved.
 */
"use strict";

module.exports = {
    rules: {
        // enforce getter and setter pairs in objects
        "accessor-pairs": [ "error", {
            setWithoutGet: true
        }],

        // enforce that class methods utilize `this`
        "class-methods-use-this": "off",

        // enforce a maximum cyclomatic complexity allowed in a program
        complexity: [ "error", 20 ],

        // require return statements to either always or never specify values
        "consistent-return": [ "off" ],

        // enforce consistent brace style for all control statements
        curly: "off",

        // enforce newline before and after dot
        "dot-location": [ "error", "property" ],

        // enforce dot notation whenever possible
        "dot-notation": [ "error", {
            allowPattern: "([a-zA-Z0-9])(_)+([a-zA-Z0-9])"
        }],

        // disallow the use of alert, confirm, and prompt
        "no-alert": "off",

        // disallow `else` blocks after `return` statements in `if` statements
        "no-else-return": "off",

        // disallow empty functions
        "no-empty-function": [ "error", {
            allow: [
                "functions",
                "generatorFunctions",
                "methods",
                "generatorMethods",
                "constructors"
            ]
        }],

        // disallow leading or trailing decimal points in numeric literals
        "no-floating-decimal": "off",

        // disallow shorthand type conversions
        "no-implicit-coercion": "off",

        // disallow magic numbers
        "no-magic-numbers": "off",

        // disallow reassigning function parameters
        "no-param-reassign": "off",

        // disallow certain properties on certain objects
        "no-restricted-properties": [ "error", {
            property: "__defineGetter__",
            message: "Please use Object.defineProperty instead."
        }, {
            property: "__defineSetter__",
            message: "Please use Object.defineProperty instead."
        }],

        // disallow javascript: urls
        "no-script-url": "off",

        // disallow comma operators
        "no-sequences": "off",

        // disallow specified warning terms in comments
        "no-warning-comments": "off",

        // enforce the consistent use of the radix argument when using parseInt()
        radix: [ "error", "as-needed" ],

        // require var declarations be placed at the top of their containing scope
        "vars-on-top": "off",

        // require parentheses around immediate function invocations
        "wrap-iife": [ "error", "inside", { functionPrototypeMethods: true }],

        // require or disallow “Yoda” conditions
        yoda: "off"
    }
};
