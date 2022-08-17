let name = prompt("Lütfen adınızı giriniz: ");
let username = document.querySelector("#username");
username.innerHTML = ` Merhaba ${name}! Hoş geldin !`;

function displayTime(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let session = document.getElementById("session");
    




    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
}

setInterval(displayTime, 10);