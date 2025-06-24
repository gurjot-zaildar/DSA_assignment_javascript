/*
 Prime Factors in Java
 Description: Find all prime factors of a number.
 Example:
 Input: 30
 Output: 2, 3, 5
 Hint: Use division method
 */
let num=18;
for(let i=2;i<=num;i++){
    while(num%i==0){
        console.log(i);
        num=Math.floor(num/i);
    }
}