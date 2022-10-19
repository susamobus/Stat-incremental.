var save = {}
var saveddata = {}
var saveandload = {

Save : function() {
    save = {
     mainlayers : { 
        points: points,
        multiplier: multiplier,
        rebirth: rebirth,
        ultrarebirth: ultrarebirth,
        lifetimepoints: lifetimepoints,
        },
     tokensfeature : {
        tokenvarssave: tokenvars
        },
      featuresunlocked : {
        unlocks: unlocks
      }
    };
    localStorage.setItem("save", JSON.stringify(save));
},
Load : function() {
    saveddata = JSON.parse(localStorage.getItem("save"));
    if (typeof saveddata.mainlayers.points !== "undefined") points = saveddata.mainlayers.points;
    if (typeof saveddata.mainlayers.multiplier !== "undefined") multiplier = saveddata.mainlayers.multiplier;
    if (typeof saveddata.mainlayers.rebirth !== "undefined") rebirth = saveddata.mainlayers.rebirth;
    if (typeof saveddata.mainlayers.ultrarebirth !== "undefined") ultrarebirth = saveddata.mainlayers.ultrarebirth;
    if (typeof saveddata.mainlayers.lifetimepoints !== "undefined") lifetimepoints = saveddata.mainlayers.lifetimepoints;
    if (typeof saveddata.featuresunlocked.unlocks !== "undefined") unlocks = saveddata.featuresunlocked.unlocks;
    if (typeof saveddata.tokensfeature !== "undefined") tokenvars = saveddata.tokensfeature.tokenvarssave;
    saveandload.LoadButtons()
},
Restart : function() {
  points = 0
  multiplier = 0
  rebirth = 0
  ultrarebirth = 0
  liftimepoints = 0
  tokenvars.tokens = 0
  saveddata = {};
  localStorage.setItem("saveddata", JSON.stringify(saveddata))
  location.reload();
},
LoadButtons : function() { //INSERT REFRESH BUTTONS OF EVERY FEATURE HERE
  tokenfuncs.tokenbuttonsrefresh()
  tokenfuncs.tokenbuttonsload()
}}