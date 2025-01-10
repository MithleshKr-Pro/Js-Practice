const evenUptoN=(n)=>{
    let count=0;
    for(let i=1;i<=n;i++){
        if(i%2 ===0) {count++;
        console.log(i);}
    }
    return count;
}
console.log(evenUptoN(500));