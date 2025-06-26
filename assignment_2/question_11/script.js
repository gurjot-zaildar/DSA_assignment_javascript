/*
Sum of Even Indexed Fibonacci Numbers
 Description: Find the sum of Fibonacci numbers at even indices up to the 2Nth 
Fibonacci number.
 Example:
 Input: N = 4 
Output: 33
 Hint: Use a loop and maintain a sum for even-indexed elements
 */

 let num=Number(prompt("enter any number"));
 let num2=num*2;
 let sum=0;
 let a=0;
 let b=1;
 for(let i=0;i<=num2;i++){
  if(i%2===0){
    sum+=a;
  }
  let c= a+b;
    a=b;
    b=c;
}
console.log(sum);