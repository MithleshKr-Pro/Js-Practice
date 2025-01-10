//check Whether a given array of integers is sorted in ascending order
const checkSort=(arr)=>{
    for(let i=0;i<arr.length -1;i++){
        if(arr[i]>arr[i+1])
        return false;
    }
    return true;
}
console.log(checkSort([3,4 ,5,8,8,9]));
console.log(checkSort([3,4,9,5,8,8,9]));