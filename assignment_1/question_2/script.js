/* Write a program to accept rating of the movie as double and Movie 
name as String. 
 Check and print the category of movie based on rating. 
 Example -
 INPUT 
 4.9 
 RRR 
 OP - RRR is a Super Hit. */
 let rating=Number(prompt("enter rating between 0 to 5 "))
 let name= prompt("name of movie")
 if(rating>=0&&rating<=2){
    console.log( name +" is  a flop");
 }else if(rating>2&&rating<=3.4){
console.log( name +" is  a semi-hit");
 }else if(rating>3.4&&rating<=4.5){
console.log( name +" is  a hit");
 }else if(rating>4.5&&rating<=5){
console.log( name +" is  a super-hit");
 }else{
    console.log("wrong input")
 }
 