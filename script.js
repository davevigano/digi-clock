function pad(n) {
    return (n < 10) ? "0" + n : n;
}

function updateTime() {
    var date = new Date();
    var time = pad(date.getHours()) + " : " + pad(date.getMinutes()) + " : " + pad(date.getSeconds());
    document.getElementById("time").textContent = time;
}

function updateDate() {
    var date = new Date();
    var output = pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + date.getFullYear();
    document.getElementById("date").textContent = output;
}

document.addEventListener("DOMContentLoaded", function () {
    updateTime();
    updateDate();
    setInterval(function () {
        updateTime();
        updateDate();
    }, 1000);
});

// SIDEBAR //

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

// BACKGROUNDS FUNCTIONS //

function setMountain() {
    document.body.style.backgroundImage = "url('media/mountain-bg.jpg')";
}

function setSky() {
    document.body.style.backgroundImage = "url('media/sky-bg.jpg')";
}

function setForest() {
    document.body.style.backgroundImage = "url('media/forest-bg.jpg')";
}

function setCity() {
    document.body.style.backgroundImage = "url('media/city-bg.jpg')";
}

function setSea() {
    document.body.style.backgroundImage = "url('media/sea-bg.jpg')";
}

function setMojave() {
    document.body.style.backgroundImage = "url('media/mojave-bg.jpg')";
}

function setWXP() {
    document.body.style.backgroundImage = "url('media/wxp-bg.jpg')";
}