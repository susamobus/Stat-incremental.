var save = {}
var data = {}
var savefunctions = {

Save : function() {
    save = {
        layers: {
            points: points,
        },
        settings: {
            autosavespeed: autosavespeed,
        }
    };
    localStorage.setItem("save", JSON.stringify(save));
},

Load : function() {
    data = JSON.parse(localStorage.getItem("save"));
    if (typeof data.layers.points !== "null") points = data.layers.points;
    if (typeof data.settings.autosavespeed !== "null") autosavespeed = data.settings.autosavespeed;
},

HardReset : function() {
    points = 0
    save = {};
    localStorage.setItem("save", save)
    location.reload();
}
}

window.setInterval(function() {
    savefunctions.Save()
},autosavespeed)