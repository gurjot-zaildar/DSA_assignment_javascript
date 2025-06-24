/*  Fibonacci Series using Loop
 Description: Print Fibonacci series up to N terms using a loop.
 Example:
 Input: N = 6
Output: 0, 1, 1, 2, 3, 5
 Hint: Use a loop and store previous two numbers.
 */

 let n= Number(prompt("enter any number"));
 let a=0 , b=1;
 let c;
 for(let i=0;i<n;i++){
    console.log(a)
    c=a+b;
     a=b;
     b=c;
 }