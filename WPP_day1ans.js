var date=new Date();
var day=date.getDay();
var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log("Today is:"+days[day]+".");
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();
timeformat=hours>=12?'PM':'AM';
hours=hours>=12?hours-12:hours;
if(hours===0 && timeformat==='PM'){
    if(minutes===0 && seconds===0){
        hours=12;
        timeformat="Noon";

    }else{
        hours=12;
        timeformat='PM';
    }
}
if(hours===0 && timeformat==='AM'){
    if(minutes===0 && seconds===0){
        hours=12;
        timeformat="Midnight";
    }
    else{
        hours=12;
        timeformat='AM';
    }
}

console.log("Current Time:"+hours+":"+minutes+":"+seconds+" "+timeformat);

