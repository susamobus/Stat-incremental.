window.setInterval(function() {
    document.getElementById("points").innerHTML = points
    document.getElementById("multiplier").innerHTML = multiplier
    document.getElementById("SliderSelector").style.left = autosavespeed + "%"
    document.getElementById("SliderValue").innerHTML = autosavespeed
},50);

window.setInterval(function() {
    if (points > 100) {
        document.getElementById("pointsleft").innerHTML = 0
        document.getElementById("multiunlockbtn").style.borderColor = "lime"
    } else {
        document.getElementById("pointsleft") = 100 - points
        document.getElementById("multiunlockbtn").style.borderColor = "red"
    }
    if (isnew == false) {
        document.getElementsByClassName("PointDisplay")[0].style.display = "inline"
    }
    if (multiunlock == true) {
        document.getElementById("multisubtab").style.display = "inline"
        document.getElementById("multiunlockbtn").style.display = "none"
    }
},150)

function Tab(id) {
    var tabs = document.getElementsByClassName("tab");
    var tab;
    for (var i = 0; i < tabs.length; i++) {
        tab = tabs.item(i);
        if (tab.id === id) {
            tab.style.display = "block";
        } else {
            tab.style.display = "none";
        }
    }
}

function SubTab(id) {
    var subtabs = document.getElementsByClassName("subtab");
    var subtab;
    for (var i = 0; i < subtabs.length; i++) {
        subtab = subtabs.item(i);
        if (subtab.id === id) {
            subtab.style.display = "block";
        } else {
            subtab.style.display = "none";
        }
    }
}