/*  Find the Sum of Even Digits in a Number
 Description: Find the sum of all even digits in a given number.
 Example:
 Input: 2384
 Output: 14
 Hint: Extract digits using % 10, check if even (digit % 2 == 0), add to sum.
 */

 let a=Number(prompt("enter any number"));
 let sum=0;
 while(a>0){
    let digit=a%10;
    if(digit%2==0){
        sum=sum+digit;
    }
    a=Math.floor(a/10);
 }
 console.log(sum);