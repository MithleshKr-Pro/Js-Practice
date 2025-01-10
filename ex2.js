//write a javascript program to get the extension  of a file Name
const getExtension=(fileName)=> fileName.slice(fileName.lastIndexOf("."));

console.log(getExtension("cpp.html"));
console.log(getExtension("cpp.js"));
console.log(getExtension("cpp.java"));
console.log(getExtension("cpp.css"));
console.log(getExtension("cpp.c"));
console.log(getExtension("cpp.configure.js"));
console.log(getExtension("cpp.sql"));