window.setInterval(function() {
    document.getElementById("points").innerHTML = points
    document.getElementById("multiplier").innerHTML = multiplier
    document.getElementById("SliderSelector").style.left = autosavespeed + "%"
    document.getElementById("SliderValue").innerHTML = autosavespeed
},50);

window.setInterval(function() {
    Check("pointsleft", "multiunlockbtn", 100, points)

    if (isnew == false) {
        document.getElementsByClassName("PointDisplay")[0].style.display = "inline"
    }

    Display("multisubtab", multiunlock, false)
    Display("multiunlockbtn", multiunlock, true)
},150)

window.setInterval(function() {
    if (autopoints == true) {
        points += (1 * multiplier)
    }
},200)

function Check(id, id2, req, stat) {
    if (stat >= req) {
        document.getElementById(id).innerHTML = 0
        document.getElementById(id2).style.borderColor = "lime"
    } else {
        document.getElementById(id).innerHTML = req - stat
        document.getElementById(id2).style.borderColor = "red"
    }
}

function Display(id, stat, inv) {
    if (stat == true) {
        if (inv == false) {
        document.getElementById(id).style.display = "inline"
        } else {
            document.getElementById(id).style.display = "none"
        }
    }
}

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