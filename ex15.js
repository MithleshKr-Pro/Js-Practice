const replaceFirstDigit=(str)=>
    str.split('').map(char=>
        char>=0 && char<=9 ?char='$':char).join('');
console.log(replaceFirstDigit("Gello8tr"));

//another Method
const replaceFirstChar=(str)=>
    str.replace(/[0-9]/,'$');
// str.replace(/[0-9]/g,'$'); //here,g--> global all the digits will be replaced && \d can be used in place of [0-9].

console.log(replaceFirstChar('abc23hsdgh2'));
console.log(replaceFirstChar('a3hsd9w348gh2'));