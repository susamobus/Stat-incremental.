window.setInterval(function() {
    document.getElementById("points").innerHTML = points
    document.getElementById("SliderSelector").style.left = autosavespeed + "%"
    document.getElementById("SliderValue").innerHTML = autosavespeed
},50);

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