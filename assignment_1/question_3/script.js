/* 
 Write a program to calculate the salary 
 */

 let gender = Number(prompt("select gender:-\n 1 : male. \n 2 : female."));
 let service = Number(prompt("year of service"));
 let qualifications = Number(prompt("qualifications:- \n 1 : Post-Graduate \n 2 : Graduate"));
if(gender==1){
    if(service>=10){
        qualifications==1?console.log("salary= 15000"):console.log("salary= 10000");
    }else if(service<10){
        qualifications==1?console.log("salary= 10000"):console.log("salary= 7000");
    }
}else{
    console.log("wrong input")
}

if(gender==2){
    if(service>=10){
        qualifications==1?console.log("salary= 12000"):console.log("salary= 9000");
    }else if(service<10){
        qualifications==1?console.log("salary= 10000"):console.log("salary= 6000");
    }
}