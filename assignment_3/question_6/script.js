let str=("hello bhai kya haal chal hai ok");
let ans="";
let arr=str.split(" ");

for(let i=0;i<arr.length;i++){
    let word = arr[i];
if(word.length<=2){
    ans+=word.toUpperCase()+" ";
}else{
    ans+= word.charAt(0).toUpperCase()
        + word.substring(1 , word.length-1)
       + word.charAt(word.length-1).toUpperCase() +" ";
}
}
console.log(ans);