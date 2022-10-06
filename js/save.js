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
        },
        others: {
            isnew: isnew
        }
    };
    localStorage.setItem("save", JSON.stringify(save));
},

Load : function() {
    data = JSON.parse(localStorage.getItem("save"));
    if (typeof data.layers.points !== "undefined") points = data.layers.points;
    if (typeof data.settings.autosavespeed !== "undefined") autosavespeed = data.settings.autosavespeed;
    if (typeof data.others.isnew !== "undefined") isnew = data.others.isnew;
},

HardReset : function() {
    points = 0
    isnew = true
    savefunctions.Save()
    location.reload();
}
}

window.setInterval(function() {
    savefunctions.Save()
},autosavespeed)