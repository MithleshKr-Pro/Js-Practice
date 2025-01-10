//Write a  javaScript program to check a given string contains 2 to 4 occurences of a specified character

const contain2To4=(target,str)=>
    str.split('').filter(char => char===target).length>=2
    && str.split('').filter(char => char===target).length<=4;

console.log(contain2To4('o',"Hello"));
console.log(contain2To4('o',"Helloooo"));
console.log(contain2To4('o',"Helloo"));
console.log(contain2To4('o',"Hellooooo"));

///Another code
const occur2to4=(target,str)=>{
    let count=0;
    str.split('').map(char=>char===target ?count++:count);
    if(count>=2 && count<=4) return true;
    else return false;
}
console.log(occur2to4('o',"Helloo"));