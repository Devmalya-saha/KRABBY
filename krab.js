var dest= new Date("Dec 25,2021,9:00:00").getTime();
var t= setInterval(function(){
var now=new Date().getTime();
var diff=dest-now;
var days=Math.floor(diff/(1000*60*60*24));
var hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
var minutes=Math.floor((diff%(1000*60*60))/(1000*60));
var seconds=Math.floor((diff%(1000*60))/1000);
hours=(hours<10)?"0"+hours:hours;
minutes=(minutes<10)?"0"+minutes:minutes;
seconds=(seconds<10)?"0"+seconds:seconds;
days=(days<10)?"0"+days:days;


document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("min").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;
},1000);


