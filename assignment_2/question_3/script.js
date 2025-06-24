/*
 Harshad Number
 Description: A number is a Harshad number if it is divisible by the sum of its 
digits.
 Example:
 Input: 18
 Output: Harshad Number
 Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9.
 Hint: Extract digits using modulo (%) and integer division (//).
 */
let num=Number(prompt("enter any number"));
let sum=0;
let copy=num;
while(num>0){
    let a=num%10;
    sum=sum+a;
    num=Math.floor(num/10);
}
if(copy%sum == 0){
    console.log("Harshad Number")
}else{
console.log("Not Harshad Number")
}
