/*
 You need to write a program where the user inputs an amount in Indian 
Rupees, and the program should output the number of currency notes 
required to make up that amount using the largest denominations first.
 Denominations Available (Indian Rupees): ₹2000, ₹500, ₹200, ₹100, ₹50, 
₹20, ₹10, ₹5, ₹2, ₹1
 Example 1:
 Input:
 Amount: 4327
 Output:
 ₹2000 x 2
 ₹500 x 0
 ₹200 x 1
 ₹100 x 1
 ₹50 x 0
 ₹20 x 1
 ₹10 x 0
 ₹5 x 1
 ₹2 x 1
 ₹1 x 0
 */
 let amount = Number(prompt("enter amount in indian ₹"));
 let arr= [2000,500,200,100,50,20,10,5,2,1];
 for( let i =0 ; i<arr.length;i++){
    let a = (amount/arr[i]);
    console.log("₹"+arr[i] +" x " +(Math.floor(a)));
    amount = amount%arr[i];

 }

