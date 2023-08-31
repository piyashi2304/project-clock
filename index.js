const THour = document.getElementById("Time_Hour");
const TMinute = document.getElementById("Time_Minute");
const TSecond = document.getElementById("Time_Second");
const TAMPM = document.getElementById("Time_AMPM");

const Message1 = document.getElementById("Message1");
const Reminder_Poster = document.getElementById("Reminder_Poster");
const Message2 = document.getElementById("Message2");

const SetAlarm_Btn = document.getElementById("SetAlarm_Btn");

const WakeTime = document.getElementById("SetWakeTime");
const NapTime = document.getElementById("SetNapTime");
const LunchTime = document.getElementById("SetLunchTime");
const NightTime = document.getElementById("SetNightTime");
console.log(NightTime)

const Timing = document.querySelectorAll(".Timing");




function Clock() {
    let newDate = new Date();
    let nHour = newDate.getHours();
    let nMin = newDate.getMinutes();
    let nSec = newDate.getSeconds();
    let AMPM = "AM";

    if (nHour >= 12 && nHour < 16) {
        Message1.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
    }
    else if (nHour >= 16 && nHour < 20 ) {
       Message1.innerHTML = "GOOD EVENING !!"
    }
    else if (nHour >= 20 && nHour < 23) {
        Message1.innerHTML = "GOOD NIGHT !!"
    }else{
        Message1.innerHTML = "GOOD MORNING!! WAKE UP !"
    }
    
    if (nHour >= 12) {
        AMPM = "PM";
    }

    if (nHour > 12) {
        nHour -= 12;
    }
    THour.innerText = nHour;
    TMinute.innerText = nMin;
    TSecond.innerText = nSec;
    TAMPM.innerText = AMPM;
}

setInterval(()=>{
    Clock() 
},1000);


SetAlarm_Btn.addEventListener('mouseover', () => {
    SetAlarm_Btn.innerHTML = "Party time!";
})

SetAlarm_Btn.addEventListener('mouseout', () => {
    SetAlarm_Btn.innerHTML = "Set Alarm";
})
SetAlarm_Btn.addEventListener('click', () => {
    let date = new Date();
    let hours = date.getHours();





    Timing[0].innerText = WakeTime.children[WakeTime.selectedIndex].innerText;
    Timing[1].innerText = NapTime.children[NapTime.selectedIndex].innerText;
    Timing[2].innerText = LunchTime.children[LunchTime.selectedIndex].innerText;
    Timing[3].innerText = NightTime.children[NightTime.selectedIndex].innerText;

    if (parseInt(LunchTime.value) === hours) {
        Message2.innerText = "LET'S HAVE SOME LUNCH !!";
        Reminder_Poster.src = "./a.svg";
    }
    else if (parseInt(NapTime.value) === hours) {
        Message2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        Reminder_Poster.src = "./lunch_image.png";
    }
    else if (parseInt(NightTime.value) === hours) {
        Message2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        Reminder_Poster.src = "./NightPoster.svg";
    } else {
        Message2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        Reminder_Poster.src = "./b.svg";
    }
})