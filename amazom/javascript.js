var watch=document.querySelector(".watch");
var button=document.querySelectorAll(".btn");
for(a=0;a<button.length;a++){
button[a].addEventListener('click', function(){
var  buttonInnerHtml=this;
colorChange(buttonInnerHtml);
});
}

function colorChange(button){
    if((button.classList.contains("purple"))){
        watch.setAttribute("src","https://i.imgur.com/xSIK4M8.png");
    }
    if(button.classList.contains("black")){
        watch.setAttribute("src","https://i.imgur.com/iOeUBV7.png");
    }
    if(button.classList.contains("blue")){
        watch.setAttribute("src","https://i.imgur.com/Mplj1YR.png");
    }
    if(button.classList.contains("red")){
        watch.setAttribute("src","https://i.imgur.com/PTgQlim.png");
    }
    
    if(button.classList.contains("pink")){
        watch.setAttribute("src","https://i.imgur.com/Zygu7I3.png");
        console.log("hello");}
}

var timeButton=document.querySelector(".time");
var heartbutton=document.querySelector(".heart");
var heartRate=document.querySelector(".heartRate");
document.querySelector("#change").innerHTML=dateTime();

timeButton.addEventListener('click',dateTime());
function dateTime(){
    heartRate.style.display="none";
    document.getElementById("change").style.display="block";
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    document.querySelector("#change").innerHTML=time;
   setTimeout('dateTime()',1000);
 
}

heartbutton.addEventListener('click',function(){
    heartRate.style.display="block";
    document.getElementById("change").style.display="none";
});
