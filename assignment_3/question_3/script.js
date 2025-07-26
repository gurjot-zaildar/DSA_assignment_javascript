let str=prompt("enter any word");
let j=str.length-1;
let ison= true;
for(let i=0;i<=j;i++){
    if(str[i]!=str[j]){
        ison=false;
        break;
    }
    j--;
}
if(ison==false){
    console.log("No");
}else{
    console.log("Yes")
}