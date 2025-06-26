/*    Find LCM of Two Numbers
 Description: Find the Least Common Multiple (LCM) of two numbers.
 Example:
 Input: a = 12, b = 15
 Output: 60
 Hint: LCM can be found using the formula: LCM(a, b) = (a × b) / GCD(a, b)
 */

 let a= Number(prompt("enter 1st number"));
 let b= Number(prompt("enter 2nd number"));
 let x=a;
 let y=b;
 let c;
 while(b!==0){
c=a%b;
a=b;
b=c;
 }
 let gcd =a;
 let lcm=(x*y)/gcd;
 console.log(lcm)
 