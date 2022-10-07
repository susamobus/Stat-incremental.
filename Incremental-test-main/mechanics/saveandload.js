var save = {}
var saveddata = {}
var saveandload = {

Save : function() {
    save = {
     mainlayers : { 
        sus: sus,
        amogus: amogus,
        crewmate: crewmate,
        impostor: impostor,
        lifetimesus: lifetimesus,
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
    if (typeof saveddata.mainlayers.sus !== "undefined") sus = saveddata.mainlayers.sus;
    if (typeof saveddata.mainlayers.amogus !== "undefined") amogus = saveddata.mainlayers.amogus;
    if (typeof saveddata.mainlayers.crewmate !== "undefined") crewmate = saveddata.mainlayers.crewmate;
    if (typeof saveddata.mainlayers.impostor !== "undefined") impostor = saveddata.mainlayers.impostor;
    if (typeof saveddata.mainlayers.lifetimesus !== "undefined") lifetimesus = saveddata.mainlayers.lifetimesus;
    if (typeof saveddata.featuresunlocked.unlocks !== "undefined") unlocks = saveddata.featuresunlocked.unlocks;
    if (typeof saveddata.tokensfeature !== "undefined") tokenvars = saveddata.tokensfeature.tokenvarssave;
    saveandload.LoadButtons()
},
Restart : function() {
  sus = 0
  amogus = 0
  crewmate = 0
  impostor = 0
  liftimesus = 0
  tokenvars.tokens = 0
  saveddata = {};
  localStorage.setItem("saveddata", JSON.stringify(saveddata))
  location.reload();
},
LoadButtons : function() { //INSERT REFRESH BUTTONS OF EVERY FEATURE HERE
  tokenfuncs.tokenbuttonsrefresh()
  tokenfuncs.tokenbuttonsload()
}}