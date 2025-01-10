//write a javaScript program to find the number of even digits in an array of integers

const noOfEven=(arr)=>
    arr.filter(nums=>nums%2==0).length;
// let arr=[1,2,3,4,5,7,8];
console.log(noOfEven([1,2,3,4,5,6,7,8,10]));