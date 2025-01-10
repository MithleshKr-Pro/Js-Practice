// write a javaScript Program to create a new String from a given string taking the first 3 characters and the last three characters of string and adding them together.The string length must be 3 Or more if not,return the original string.

const firstAndLast3=(str)=>{
    if(str.length>2) return str.slice(0,3).concat(str.slice(-3));
    else return str;
}

const firstAndLast=(str)=> 
    str.length>2 ? str.slice(0,3).concat(str.slice(-3)) : str;
console.log(firstAndLast3("Mithlesh"));
console.log(firstAndLast3("Mi"));
console.log(firstAndLast("Mithlesh Kr"));