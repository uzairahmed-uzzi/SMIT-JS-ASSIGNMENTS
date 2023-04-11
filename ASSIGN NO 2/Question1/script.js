function createClosure(num){
    return (num1)=>{
        return num+num1;
    }
}
addFive=createClosure(5);
console.log(addFive(10));