//largest Even Number in an Array
const largestEven=(arr)=>{
    let maxEven=-1;
    for(let i=0;i<arr.length;i++){
        arr[i]%2===0 && arr[i]>maxEven ? maxEven=arr[i]:maxEven;
    }

    return maxEven;
}
console.log(largestEven([23,44,54,3,67,46,52]));

//Another Method
const MaxEven=(arr)=>
    Math.max(...arr.filter(nums=>nums%2===0));

console.log(MaxEven([3,4,67,58,36,40]));