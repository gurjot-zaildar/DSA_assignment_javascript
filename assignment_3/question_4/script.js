let str = prompt("change case of char")
let ans="";
for(let i=0;i<str.length;i++){
    charcode=str.charCodeAt(i);
    if(charcode>=65 && charcode<=90){
        ans+=String.fromCharCode(charcode+32);
    }else if(charcode>=97 && charcode<=122){
        ans+=String.fromCharCode(charcode-32);
    }else{
        ans+=str[i];
    }
}
console.log(ans)