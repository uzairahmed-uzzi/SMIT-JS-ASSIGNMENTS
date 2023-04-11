function recurcisveSearch(arr,element,ind=0){

if(ind>=arr.length){
    return false;

}else if(arr[ind]===element){
    return true;
}
else{
  return  recurcisveSearch(arr,element,ind+1);
}
}
arr=[1,2,3,4,5,6];
console.log(recurcisveSearch(arr,4));