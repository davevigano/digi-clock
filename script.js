function updateTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    time = h + " : " + m + " : " + s;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;
    setTimeout(updateTime, 1000)
}

function updateDate() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    y = (y < 10) ? "0" + y : y;

    output = d + "/" + m + "/" + y;
    document.getElementById("date").innerText = output;
    document.getElementById("date").textContent = output;
    setTimeout(updateDate, 1000);
}

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