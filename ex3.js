//write a program to replace every character in the string withe the CHaracter following it in the alphabet
const ReplaceChar=(str)=>{
    let result="";
    for(let i=0;i<str.length;i++){
        // str[i]=String(Number(str[i])-1);
        result+=String.fromCharCode(str.charCodeAt(i)+1);
    }
    console.log(result);
}
console.log(ReplaceChar("Hello"));
console.log(ReplaceChar("Mithlesh"));
console.log(ReplaceChar("Kumar"));

//Another Method to do so
const ReplaceChar=(str)=>{
    return str
        .split('')
        .map(nums=>String.fromCharCode(nums.charCodeAt(0) + 1))
        .join('');
    
}
console.log(ReplaceChar('hello'));
console.log(ReplaceChar('Mithlesh'));

