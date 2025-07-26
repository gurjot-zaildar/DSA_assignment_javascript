let arr=["gurjot","harsh","gurpreet","preet","harshit","gurmilan"];
let prefix = "gur";
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i].startsWith(prefix)){
        count++
    }
}
console.log(count)