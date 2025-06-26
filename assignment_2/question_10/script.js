/*
 Neon Number
 Description: A number where the sum of digits of its square equals the 
number itself.
 Example:
 Input: 9
Output: Neon Numbe
 Explanation: 9² = 81, sum of digits = 9.
 Hint: Find square, sum digits, compare.
 */
let num= Number(prompt("enter any number"))
let num2=num*num;
let sum=0;
while(num2>0){
    let a=num2%10
    sum=sum+a;
    num2=Math.floor(num2/10);
}
if(num==sum){
    console.log("Neon Number")
}else{
    console.log("not a Neon Number")
}