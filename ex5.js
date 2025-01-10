//write a javascript Program to create a new string adding "New!" in front of a given String.If the given String begins with "New!" already then return the original String.
const addNew=(str)=>{
    let subStr=str.slice(0,4);
    if(str.slice(0,4)==="New!") return str;
    else{
        // let str1='New!';
        // return str1.concat(" ",str);
        return `New! ${str}`;
    }
}
console.log(addNew('New! Hello'));
console.log(addNew(' Hello'));
console.log(addNew('Offers'));

//Another Method
const addNew=(str)=>
    str.indexOf("New!")===0 ? str:`New! ${str}`;

console.log(addNew('Hello'));
console.log(addNew('Offers'));

