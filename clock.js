function clock()
{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours > 12){
        hours = hours-12;
    }
    
    let hrs = document.getElementById('hrs');
    hrs.innerText = hours;
    let min = document.getElementById('min');
    min.innerText = minutes;
    let sec = document.getElementById('sec');
    sec.innerText = seconds;
}
setInterval(()=>{
    clock()
},1000);

let date = new Date();
let hours = date.getHours();

if(hours>=12){
    let ampm = document.getElementById('ampm');
    ampm.innerText = "PM";
}
else if(hours<12){
    let ampm = document.getElementById('ampm');
    ampm.innerText = "AM";
}

let greeting = document.getElementById('greeting');

    if(hours>=12 && hours<16)
    {
        greeting.innerText="GOOD AFTERNOON!! take some sleep";
    }
    else if(hours>=16 && hours<20)
    {
        greeting.innerText="GOOD EVENING!!";
    }
    else if(hours>=20 && hours<24)
    {
        greeting.innerText="GOOD NIGHT!!";
    }
    else{
        greeting.innerText="GOOD MORNING !! Wake Up !!"
    }  
 
    
// let buttonclick=document.getElementById("buttonclick");
// buttonclick.addEventListener("mouseover",function(){
//     this.innerText="Party Time"
// })
// console.log("buttonclick")
// buttonclick.addEventListener("mousehout",function(){
//     this.innerText="Set Alarm"        
// })

// setting the image and the text when clicked on the button

button.addEventListener("click",function(){
    let date = new Date();
    let hrs = date.getHours();
    

    let wakeUp =document.getElementById('wakeUp');
    let lunch =document.getElementById('lunch');
    let nap =document.getElementById('nap');
    let night =document.getElementById('night');

    if(parseInt(wakeUp.value)===hrs){
        document.getElementById("settime").innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById('clockimage').src = "./Component 30 – 1.png"
        
    }
    else if(parseInt(lunch.value)===hrs){
        document.getElementById("settime").innerText="LET HAVE SOME LUNCH!!";
        document.getElementById('clockimage').src = "./Component 31 – 1.png"
    }
    else if(parseInt(nap.value)===hrs){
        document.getElementById("settime").innerText="STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING";
        document.getElementById('clockimage').src ="./naptime evening.png";
    }   
    else if(parseInt(night.value)===hrs){
        document.getElementById("settime").innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById('clockimage').src ="./Component 32 – 1.png";
    }
   

    let timing =document.getElementsByClassName('timing');

        timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
        timing[1].innerText = lunch.options[lunch.selectedIndex].text;
        timing[2].innerText = nap.options[nap.selectedIndex].text;
        timing[3].innerText = night.options[night.selectedIndex].text;

})
