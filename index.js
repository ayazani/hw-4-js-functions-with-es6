'use strict';
// 1 task
let splitAndMerge = (str, sp) => {
    if(sp === ' ') {
        return str.split(' ').join('').split('').join(' ');
    } else {
        return str.split('').join(sp).split(sp+' '+sp).join(' ');
    }
};
/* //check cond
console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("Hello World!",","));
 */

// 2 task
let convert = (obj) => {
    let result = [];
    for (let key in obj){
        result.push([key, obj[key]]);
    }
    return result;
};
//console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

// 3 task
let toCamelCase  = (str) => {
    let result = "";
    let isSymbol = false;
    for (let i of str){
        if(i === "-" || i === "_"){
         isSymbol = true;
         continue
        } else if (isSymbol) {
            result += i.toUpperCase();
            isSymbol = false;
        } else {
        result += i;
        }
    }
    return result;
};
/* //cond check
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
 */

// 4 task
let reverseWords = (str) =>  str.split("").reverse().join("");
//console.log(reverseWords(" A fun little challenge! "));

// 5 task
let stringExpansion = (str) => {
    let hasNumbers = false;
    let res = "";
    for (let i = 0; i < str.length; i++){
        if(!isNaN(Number(str[i]))){
            hasNumbers = true;
            if(Number(str[i]) && Number(str[i+1])){
                continue;
            } else {
                for (let j = 0; j < Number(str[i]); j++) {
                    res += str[i + 1];
                }
            }
        }
    }
    return hasNumbers ? res : str;
};
 //cond check
/*
console.log(stringExpansion('3D2a5d2f') === 'DDDaadddddff');
console.log(stringExpansion('3d332f2a') === 'dddffaa');
console.log(stringExpansion('abcde') === 'abcde');
 */

// 6 task
let largest =  (...args) => {
    let res = args[0];
    for(let elem of args){
        if( res < elem) res = elem;
    }
    return res;
};
//console.log(largest(2, 0.1, -5, 100, 3)); // 100;

let smallest = (...args)=> {
    let res = args[0];
    for(let elem of args){
        if( res > elem) res = elem
    }
    return res;
};
//console.log(smallest(2, 0.1, -5, 100, 3)); //-5

// 7 task
let transform = (arr) => {
    let res = [];
    arr.forEach(function(item) {
        res.push(function () {
            return item;
        })
    });
    return res;
};
/*
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50
 */

// 8 task
let sum = (arg, ...args) => {
    if(args.length === 0){
        return !arg ? 0 : arg;
    }
    else if (args.length === 1){
        return arg + args[0];
    } else {
        let temp = args[0];
        args.shift();
        return (arg + sum(temp, ...args));
    }
};
/* //check
let a = sum(1, 3, 5, 7);
console.log(a); */

// 9 task
let countDown = (arg) => {
    if (arg === 0){
        console.log(0);
    } else {
        console.log(arg);
        countDown(arg-1);
    }
};
//countDown(3); // 3 2 1 0
