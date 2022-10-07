var save = {}
var data = {}
var savefunctions = {

Save : function() {
    save = {
        layers: {
            points: points,
            multiplier: multiplier,
            rebirth: rebirth,
        },
        layerunlocks: {
            isnew: isnew,
            multiunlock: multiunlock,
            rebirthunlock: rebirthunlock,
        },
        layerauto: {
            autopoints: autopoints,
        },
        settings: {
            autosavespeed: autosavespeed,
        }
    };
    localStorage.setItem("save", JSON.stringify(save));
},

Load : function() {
    data = JSON.parse(localStorage.getItem("save"));
    function LoadStat(path, stat) {
        if (typeof path !== "undefined") stat = path;
    };
    LoadStat(data.layers.points, points)
    LoadStat(data.layers.multiplier, multiplier)
    LoadStat(data.layers.rebirth, rebirth)
    LoadStat(data.layerunlocks.multiunlock, multiunlock)
    LoadStat(data.layerunlocks.rebirthunlock, rebirthunlock)
    LoadStat(data.layerauto.autopoints, autopoints)
    LoadStat(data.settings.autosavespeed, autosavespeed)
},

HardReset : function() {
    points = 0
    multiplier = 1
    rebirths = 0
    ultrarebirth = 0
    prestige = 0
    isnew = true
    multiunlock = false
    rebirthunlock = false
    urebirthunlock = false
    prestigeunlock = false
    autopoints = false
    automulti = false
    tokens = 0
    supertokens = 0
    megatokens = 0
    tokensunlock = false
    stokensunlock = false
    mtokensunlock = false
    autotokens = false
    savefunctions.Save()
    location.reload();
}
}

window.setInterval(function() {
    savefunctions.Save()
},autosavespeed)