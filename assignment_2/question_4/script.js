/*
 Perfect Square
 Description: A number is a perfect square if it is the square of an integer.
 Example:
 Input: 25
 Output: Perfect Square
 Explanation: 5 × 5 = 25.
 Hint: Use sqrt(N), check if it’s an integer.
 */
let num=Number(prompt("enter any number"))
let a =Math.floor(Math.sqrt(num));
let b= a*a;
if(num==b){
    console.log("Perfect square")
}else{
    console.log("not a perfect square")
}