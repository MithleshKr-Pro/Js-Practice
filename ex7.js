//write a javaScript program to extract the first half of a string if even length
const firstHalf=(str)=>
    (str.length)%2 ===0? str.slice(0,(str.length)/2) : str;
console.log(firstHalf("Mithlesh"));
console.log(firstHalf("Mithlesh Kr"));
console.log(firstHalf("temp"));
console.log(firstHalf("temple"));
console.log(firstHalf("temples"));