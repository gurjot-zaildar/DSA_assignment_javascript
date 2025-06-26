/*  Find the Largest Digit in a Number
 Description: Find the largest digit in a given number.
 Example
 Input: 54829
 Output: 9
 Hint: Extract digits using modulo (% 10) and compare
 */

 let num=Number(prompt("enter any number"));
 let max=0;
 while(num>0){
    let a = num%10
    if(a>max){
        max=a;
    }
    num = Math.floor(num/10);
 }
 console.log(Math.max(max))