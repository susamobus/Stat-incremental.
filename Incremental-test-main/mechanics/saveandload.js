var save = {}
var saveddata = {}
var saveandload = {

Save : function() {
    save = {
     mainlayers : { 
         mainlayerssave: mainlayersvars
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
    if (typeof saveddata.mainlayers.mainlayerssave !== "undefined") mainlayersvars = saveddata.mainlayers.mainlayerssave;
    if (typeof saveddata.featuresunlocked.unlocks !== "undefined") unlocks = saveddata.featuresunlocked.unlocks;
    if (typeof saveddata.tokensfeature !== "undefined") tokenvars = saveddata.tokensfeature.tokenvarssave;
    saveandload.LoadButtons()
},
Restart : function() {
  saveddata = {};
  localStorage.setItem("saveddata", JSON.stringify(saveddata))
  location.reload();
},
LoadButtons : function() { //INSERT REFRESH BUTTONS OF EVERY FEATURE HERE
  tokenfuncs.tokenbuttonsrefresh()
  tokenfuncs.tokenbuttonsload()
}}