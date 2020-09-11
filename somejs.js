"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var printOutput = function (a) { return console.log(a); };
var addNum = function (a, b) { return a + b; };
printOutput(addNum(1, 2));
var hobbies = ['a', 'b'];
var ac = __spreadArrays(['c'], hobbies);
printOutput(ac);
var person2 = {
    a: 'a',
    b: 'ba'
};
var copiedP = __assign({}, person2);
printOutput(copiedP);
