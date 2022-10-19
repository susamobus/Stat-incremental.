var autosavespeed = 100

function SliderInput() {
    var value = document.getElementById("Slider").value
    document.getElementById("SliderSelector").style.left = value + "%"
    document.getElementById("SliderValue").innerHTML = value
    autosavespeed = value
}