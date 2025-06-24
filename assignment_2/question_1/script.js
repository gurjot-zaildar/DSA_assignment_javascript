/*
   1. ISBN Number
 Description: An ISBN (International Standard Book Number) is a unique 10-digit 
number assigned to books. The ISBN is valid if the sum of its digits, each 
multiplied by its position (1 to 10), is divisible by 11.
 Example
 Input: 020131452
 Output: Invalid ISB
 Explanation: The sum of the digits multiplied by their positions is not 
divisible by 11
 Input: 0471958697
 Output: Valid ISBN
 Explanation: (0×1 + 4×2 + 7×3 + … + 7×10) is divisible by 11.
 Hint: Use a loop to multiply each digit by its respective position and check 
divisibility by 11
*/
 
let num =Number(prompt("enter 10 digit ISBN number"));
let sum=0;
for(let i=10;i>=1;i--){
let a=num%10;
    sum=sum+(a*i);
num=Math.floor(num/10);
}
if(sum%11==0){
    console.log("Valid ISBN")
}else{
    console.log("Invalid ISBN")
}