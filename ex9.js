// given two values,write a javaScript program to find out which one is nearest to 100
const near100=(num1,num2)=>
    100-num1 >= 100-num2 ? num2:num1;
console.log(near100(25,75));
console.log(near100(100,1));
