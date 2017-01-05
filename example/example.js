/**
 * XadillaX <i@2333.moe> created at 2016-12-29 16:30:02 with ❤
 *
 * Copyright (c) 2016 xcoder.in, all rights reserved.
 */
"use strict";

console.log(`It's a new day! ${new Date()}`);

for(let i = 0; i < 10; i++) {
    if(new Date() === new Date()) {
        console.log(new Date());
    } else {
        console.log("Hello");
    }
}

while(new Date()) {
    // empty
}

if(new Date()) console.log(1);

function abcdeft() {
}

const temp = function() {
    try {
        console.log("1");
    } catch(e) {
    }
};

temp(function a() {});

while(false) {
    /   abc/.test("123");
    temp.hasOwnProperty("bar");
}

Object.defineProperty(temp, "o", {
    get: function() {
        return 1;
    }
});

temp.a = 1;
temp._a_ = 2;
temp["a_1"] = 3;
temp["a-1"] = abcdeft();
temp["__a_____b__"] = .4;
