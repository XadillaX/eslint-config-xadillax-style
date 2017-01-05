/**
 * XadillaX <i@2333.moe> created at 2016-12-29 17:16:52 with ❤
 *
 * Copyright (c) 2016 xcoder.in, all rights reserved.
 */
"use strict";

module.exports = {
    rules: {
        "keyword-spacing": [
            "error", {
                before: true,
                after: true,
                overrides: {
                    "if": { after: false },
                    "for": { after: false },
                    "while": { after: false },
                    "catch": { after: false },
                    "switch": { after: false }
                }
            }
        ]
    }
};
