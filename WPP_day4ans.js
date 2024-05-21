var date=new Date();
console.log(date);
var cmas=new Date(date.getFullYear(),11,25);
console.log(cmas);
if(date.getMonth()==11 && date.getDate()>25){
    cmas.setFullYear(cmas.getFullYear()+1);
}
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-date.getTime())/(one_day))+" "+"days left for christmas");
