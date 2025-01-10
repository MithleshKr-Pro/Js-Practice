let num1=prompt("Enter First Number :");
console.log(num1);
let num2=prompt("Enter Second Number :");
console.log(num2);

const checkIt=()=>{
    if(Number(num1)===100 || Number(num2)===100){
        return true;
    }
    if(Number(num1)+Number(num2)===100){
        return true;
    }
    return false;
}

//another Code
const isEqualto100=(a,b)=>
    a===100 || b===100 || a+b===100;

console.log(isEqualto100(10,0));
console.log(isEqualto100(0,100));
console.log(isEqualto100(10,90));
