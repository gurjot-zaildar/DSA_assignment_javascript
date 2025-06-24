/*
     Find Numbers with Exactly X Divisors (Java)
 Description: Find numbers that have exactly X divisors.
 Example:
 Input: X = 3
Output: 4, 9, 25, 49
 Explanation: These numbers have exactly three divisors.
 Hint: Use prime factorization.
 */
let x=Number(prompt("enter any number 1 to 10"));
let limit=50;
for(let i=1;i<=limit;i++){
    let count=0;
for(let j=1;j<=i;j++){
    if(i%j==0){
        count++;
    }
}if(count==x){
    console.log(i);
}
}
