
function addNewPara(string){
  let body=document.getElementById("container");
   let para=`<p>${string}</p>`;
  body.innerHTML=para;
};
addNewPara("My Name Is Uzair Ahmed");