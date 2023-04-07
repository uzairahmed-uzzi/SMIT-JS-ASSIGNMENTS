let arr=[];
for(let i=0;i<5;i++){
    arr[i]=+prompt("ENTER A NUMBER: ");
}

console.log(`LARGEST NUMBER IS: ${Math.max(...arr)}`);