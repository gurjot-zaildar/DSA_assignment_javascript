/* 
 Calculate Area using Switch Statement
 Description: Find the area of a circle, rectangle, or triangle using switch.
 Example:
 Input: Choice = Circle, Radius = 5
Output: Area = 78.5
 Hint: Use switch with case statements
 */

 let area=Number(prompt("select any number find area:-\n 1 : circle\n 2 : rectangle\n 3 : triangle. "));
 let num;
 let num2;
 switch (area) {
    case 1:
        num=Number(prompt("enter radius of circle"));
        console.log((Math.PI*(num*num)).toFixed(1));
        break;
        case 2:
        num=Number(prompt("enter length of rectangle"));
         num2=Number(prompt("enter breath of rectangle"));
        console.log(num*num2);
        break;
         case 3:
        num=Number(prompt("enter base of trangle"));
         num2=Number(prompt("enter height of trangle"));
        console.log(0.5*(num*num2));
        break;
 
    default:
        console.log("wrong input")
        break;
 }