let marks=[],obtainedMarks=0,totalMarks=500,percentage,grade;

let subjects=["MATHS","COMPUTER SCIENCE","ENGLISH","URDU","CHEMISTRY"];

for(let i=0;i<5;i++){
    marks.push(+prompt(`ENTER YOUR ${subjects[i]} MARKS OUT OF 100: `));
}

marks.forEach((e)=>{
    obtainedMarks+=e;
});

percentage=(obtainedMarks/totalMarks)*100;
if(percentage>=90){
    grade='A';
}
else if(percentage>=80&&percentage<90){
    grade='B';
}
else if(percentage>=70&&percentage<80){
    grade='C';
}
else if(percentage>=60&&percentage<70){
    grade='D';
}
else {
    grade='F';
}
console.log(`YOUR PERCENTAGE IS ${percentage} AND YOUR GRADE IS ${grade}`);
