/*
Number of Days in a Month
 Description: Find the number of days in a given month and year (to handle leap 
years).
 Example:
 Input: Month = 2, Year = 2024
 Output: 29
 Hint: Use conditions:
 31 Days: Jan, Mar, May, Jul, Aug, Oct, Dec
 30 Days: Apr, Jun, Sep, Nov
 February: 28 or 29 (check for leap year using year % 4 == 0 but not year % 
100 != 0 unless year % 400 == 0)
*/

let mon=Number(prompt("enter any month number 1 to 12"));
let year=Number(prompt("enter any year"))
switch (mon) {
    case 1:
        console.log("31")
        break;
        case 2:
            if(year%4==0 && year%100!==0 || (year % 400==0)){
                console.log("29")
            }else{
                console.log("28")
            }
        break;
        case 3:
        console.log("31")
        break;
        case 4:
        console.log("30")
        break;
        case 5:
        console.log("31")
        break;
        case 6:
        console.log("30")
        break;
        case 7:
        console.log("31")
        break;
        case 8:
        console.log("31")
        break;
        case 9:
        console.log("30")
        break;
        case 10:
        console.log("31")
        break;
        case 11:
        console.log("30")
        break;
        case 12:
        console.log("31")
        break;

    default:
        console.log("wrong input")
        break;
}