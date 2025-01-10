//write a  javaScript Program to Concatenate two strings except their first Character
const add2Str=(str1,str2)=>
    str1.slice(1,str1.length) + str2.slice(1,str2.length);
console.log(add2Str("Mithlesh","Kumar"));
console.log(add2Str("Mahesh","Kumar"));
console.log(add2Str("Ramesh","Kumar"));