var save = {}
var data = {}
var savefunctions = {

Save : function() {
    save = {
        layers: {
            points: points,
            multiplier: multiplier,
        },
        layerunlocks: {
            isnew: isnew,
            multiunlock: multiunlock,
        },
        settings: {
            autosavespeed: autosavespeed,
        }
    };
    localStorage.setItem("save", JSON.stringify(save));
},

Load : function() {
    data = JSON.parse(localStorage.getItem("save"));
    if (typeof data.layers.points !== "undefined") points = data.layers.points;
    if (typeof data.layers.multiplier !== "undefined") multiplier = data.layers.multiplier
    if (typeof data.layerunlocks.isnew !== "undefined") isnew = data.layerunlocks.isnew;
    if (typeof data.layerunlocks.multiunlock !== "undefined") multiunlock = data.layerunlocks.multiunlock;
    if (typeof data.settings.autosavespeed !== "undefined") autosavespeed = data.settings.autosavespeed;
},

HardReset : function() {
    points = 0
    multiplier = 0
    isnew = true
    multiunlock = false
    savefunctions.Save()
    location.reload();
}
}

window.setInterval(function() {
    savefunctions.Save()
},autosavespeed)