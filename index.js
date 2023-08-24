function clock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    
    if(hours>12){
        hours=hours-12;
    }
    // console.log(hours ,minutes,seconds);

    let hrs=document.getElementById("hrs");
    hrs.innerText = hours;
    let min=document.getElementById("min");
    min.innerText = minutes;
    let sec=document.getElementById("sec");
    sec.innerText = seconds;
    
}
setInterval(()=>{
clock()
},1000)


let date=new Date();
let hours=date.getHours();
if(hours>=12){
    let ampm=document.getElementById("ampm");
    ampm.innerText = "PM"
    }
    else{
        let ampm=document.getElementById("ampm");
        ampm.innerText = "AM"  
    }
    let greeting=document.getElementById("greeting");
    if(hours>=12 && hours<16)
    {
        greeting.innerHTML = "Good Afternoon";
    }
    if(hours>=16 && hours<20)
    {
        greeting.innerHTML = "Good Evening";
    }
    if(hours>=20 && hours<24)
    {
        greeting.innerHTML = "Good Night";
    }

    // let button=document.getElementById("button");
    button.addEventListener("click" ,function(){
        let date=new Date();
        let hours= date.getHours();

        let wakeUp=document.getElementById("wakeUp");
        let lunch=document.getElementById("lunch");
        let nap=document.getElementById("nap");
        let night=document.getElementById("night");

        if(parseInt(wakeUp.value)===hours)
        {
            document.getElementById("settime").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
            document.getElementById("Image").src ="./Component30-1.svg";
        }
        else if(parseInt(lunch.value)===hours)
       {
        document.getElementById("settime").innerHTML="LET'S HAVE SOME LUNCH !!";
        document.getElementById("Image").src="./Component31-1.svg";
       }
       else if(parseInt(nap.value)===hours)
       {
        document.getElementById("settime").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("Image").src="./lunch_image.png";
       }
       else if(parseInt(night.value)===hours)
       {
        document.getElementById("settime").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("Image").src="./Component32-1.svg";
       }
       let timing = document.getElementsByClassName("timing");
       timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
       timing[1].innerText = lunch.options[lunch.selectedIndex].text;
       timing[2].innerText = nap.options[nap.selectedIndex].text;
       timing[3].innerText = night.options[night.selectedIndex].text;
    })
    let button=button.getElementById("button")
    button.addEventListener("mousehover",function(){
        this.innerText="Party Time"
    })
    button.addEventListener("mousehout",function(){
        this.innerText="Party Time"
    })