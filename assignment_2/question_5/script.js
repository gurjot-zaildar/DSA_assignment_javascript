/*
 Abundant Number
 Description: A number is abundant if the sum of its proper divisors is greater 
than the number itself.
 Example:
 Input: 12
 Output: Abundant Number
 Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12).
 Hint: Use a loop to find proper divisors
 */
let num=Number(prompt("enter any number"));
let sum=0;
for(let i=1;i<=num/2;i++){
    if(num%i==0){
        sum=sum+i;
    }
}
if(sum>num){
    console.log("Abundant Number")
}else{
    console.log("not a Abundant Number")
}