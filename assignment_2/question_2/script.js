/*
 HCF/GCD
 Description: The Highest Common Factor (HCF) or Greatest Common Divisor 
(GCD) of two numbers is the largest number that divides both numbers 
without leaving a remainder.
 Example:
 Input: a = 12, b = 18
 Output: 6
Explanation: Factors of 12: {1,2,3,4,6,12}, Factors of 18: {1,2,3,6,9,18}. 
Common factors: {1,2,3,6}. The highest is 6.
 Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b)
 */

 let a=Number(prompt("enter 1st number"));
 let b=Number(prompt("enter 2nd number"));
 let c;
 while(b!==0){
     c=a%b;
     a=b;
     b=c;
 }
 console.log(a)
