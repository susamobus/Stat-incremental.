var mainlayersvars = {
 points : 0,
  displayedpoints : 0, //the displayed points based on the notation
  pointsgainpertick : 0,
  lifetimepoints : 0,
  multiplier : 0,
  multipliercost : 0,
  multiplierconvert : 0,
  mode : 0,
  rebirthcost : 0,
  rebirth : 0,
  rebirthconvert : 0,
  ultrarebirth : 0,
  ultrarebirthcost : 0,
  ultrarebirthconvert : 0,
  teststat : 0,
  upgradepanelactive : 'none',
  isloading : 1,  //1 = true, 0 = false
  unlocks : [],
  notation : 1
}
window.onload = function() {
   Load()
};
window.setInterval(function() {
    if (isloading == 0){
      mainlayervars.pointsgainpertick = ExpantaNum.floor(ExpantaNum.mul(tokentotalboosts.points,ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(mainlayervars.ultrarebirth,2),1),ExpantaNum.mul(ExpantaNum.add(ExpantaNum.div(mainlayervars.rebirth,2),1),ExpantaNum.add(mainlayervars.multiplier,1)))))
      mainlayervars.points = ExpantaNum.floor(ExpantaNum.add(mainlayervars.points,mainlayervars.pointsgainpertick))
      mainlayervars.lifetimepoints = ExpantaNum.floor(ExpantaNum.add(mainlayervars.lifetimepoints,mainlayervars.pointsgainpertick))
}},50);
window.setInterval(function() {
   saveandload.Save()
},80);
window.setInterval(function() {
    doneloading()
    Fixstaterror()
 },49);
window.setInterval(function() {
    displayedpoints = toDisplay(mainlayervars.points)
    document.getElementById("displayedpoints").innerHTML = displayedpoints
    if (notation == 1) {
        document.getElementById("notation").innerHTML = "Suffixes"
        document.getElementById("notation").style.color = "royalblue"
    } else if (notation == 2) {
        document.getElementById("notation").innerHTML = "Scientific"
        document.getElementById("notation").style.color = "lightsteelblue"
    }
    
    document.getElementById("multiplier").innerHTML = toDisplay(mainlayervars.multiplier)
    document.getElementById("rebirth").innerHTML = toDisplay(mainlayervars.rebirth)
    document.getElementById("ultrarebirth").innerHTML = toDisplay(mainlayervars.ultrarebirth)
    document.getElementById("tokenstext2").innerHTML = toDisplay(tokenvars.tokens)
    document.getElementById("tokensgain1").innerHTML = toDisplay(tokenfuncs.getTokensGain(1))
    document.getElementById("tokensgain2").innerHTML = toDisplay(tokenfuncs.getTokensGain(2))
    document.getElementById("tokensgain3").innerHTML = toDisplay(tokenfuncs.getTokensGain(3))
    document.getElementById("tokenscost1").innerHTML = toDisplay(tokenfuncs.getTokensCost(1))
    document.getElementById("tokenscost2").innerHTML = toDisplay(tokenfuncs.getTokensCost(2))
    document.getElementById("tokenscost3").innerHTML = toDisplay(tokenfuncs.getTokensCost(3))
    mainlayervars.multipliercost = ExpantaNum.mul(ExpantaNum.add(mainlayervars.multiplier,1),5)
    mainlayervars.multiplierconvert = ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.div(mainlayervars.points,mainlayervars.multipliercost),ExpantaNum.add(mainlayervars.rebirth,1)))
    mainlayervars.rebirthcost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.add(mainlayervars.rebirth,10),2),10)),10)
    mainlayervars.rebirthconvert = ExpantaNum.floor(ExpantaNum.mul(tokentotalboosts.rebirth,ExpantaNum.mul(ExpantaNum.div(mainlayervars.multiplier,mainlayervars.rebirthcost),ExpantaNum.add(mainlayervars.ultrarebirth,1))))
    if (ExpantaNum.gte(ExpantaNum.add(mainlayervars.ultrarebirth,mainlayervars.ultrarebirthconvert),30)) {
        mainlayervars.ultrarebirthcost = ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(2.5,mainlayervars.ultrarebirth),12.5),ExpantaNum.add(1,ExpantaNum.div(mainlayervars.ultrarebirth,10))),2),10)),10),9)
        mainlayervars.ultrarebirthconvert = destroyNumWithSign(ExpantaNum.floor(ExpantaNum.add(ExpantaNum.logarithm(ExpantaNum.div(mainlayervars.rebirth,ExpantaNum.root(mainlayervars.ultrarebirthcost,9)),6),ExpantaNum.sub(30,mainlayervars.ultrarebirth))),-1)
    } else {
        mainlayervars.ultrarebirthcost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(2.5,mainlayervars.ultrarebirth),12.5),ExpantaNum.add(1,ExpantaNum.div(mainlayervars.ultrarebirth,10))),2),10)),10)
        mainlayervars.ultrarebirthconvert = ExpantaNum.floor(ExpantaNum.div(mainlayervars.rebirth,mainlayervars.ultrarebirthcost))
    }
    if (mode == 0) {
    document.getElementById("multipliercost").innerHTML = toDisplay(mainlayervars.multipliercost)
    document.getElementById("multiplieramount").innerHTML = "1"
    document.getElementById("rebirthcost").innerHTML = toDisplay(mainlayervars.rebirthcost)
    document.getElementById("rebirthamount").innerHTML = "1"
    document.getElementById("ultrarebirthcost").innerHTML = toDisplay(mainlayervars.ultrarebirthcost)
    document.getElementById("ultrarebirthamount").innerHTML = "1"
    document.getElementById("mode").innerHTML = "Buy singles"
    document.getElementById("mode").style.color = "greenyellow"
    }
    if (mode == 1) {
        document.getElementById("multipliercost").innerHTML = "All"
        document.getElementById("multiplieramount").innerHTML = toDisplay(mainlayervars.multiplierconvert)
        document.getElementById("rebirthcost").innerHTML = "1 rebirth when converted"
        document.getElementById("rebirthamount").innerHTML = toDisplay(mainlayervars.rebirthconvert)
        document.getElementById("ultrarebirthcost").innerHTML = "1 ultrarebirth when converted"
        document.getElementById("ultrarebirthamount").innerHTML = toDisplay(mainlayervars.ultrarebirthconvert)
        document.getElementById("mode").innerHTML = "Buy max"
        document.getElementById("mode").style.color = "lightskyblue"
    }
},50);
function Multiplier() { 
    if (mode == 0) {
        if (ExpantaNum.gte(mainlayervars.points,mainlayervars.multipliercost) == true) {
        mainlayervars.multiplier = ExpantaNum.add(mainlayervars.multiplier,ExpantaNum.add(1, mainlayervars.rebirth))
        mainlayervars.points = ExpantaNum.sub(mainlayervars.points,mainlayervars.multipliercost)
    }}
    if (mode == 1) {
        if (ExpantaNum.gt(mainlayervars.multiplierconvert,0) == true) {
        mainlayervars.multiplier = ExpantaNum.add(mainlayervars.multiplier,mainlayervars.multiplierconvert)
        mainlayervars.points = 0
    }}
;}
function Mode(number) {
    mode = number
}
function Rebirth() {
    if (mode == 0) {
    if (ExpantaNum.gte(mainlayervars.multiplier,mainlayervars.rebirthcost) == true) {
        mainlayervars.rebirth = ExpantaNum.add(mainlayervars.rebirth,ExpantaNum.add(1,mainlayervars.ultrarebirth))
        mainlayervars.multiplier = 0
        mainlayervars.points = 0
    }}
    if (mode == 1) {
    if (ExpantaNum.gt(mainlayervars.rebirthconvert,0) == true) {
        mainlayervars.rebirth = ExpantaNum.add(mainlayervars.rebirth,mainlayervars.rebirthconvert)
        mainlayervars.multiplier = 0
        mainlayervars.points = 0
    }}
}
function Test() {
    teststat = teststat + 1
}
function Ultrarebirth() {
    if (mode == 0) {
        if (ExpantaNum.gte(mainlayervars.rebirth,mainlayervars.ultrarebirthcost) == true) {
            mainlayervars.ultrarebirth = ExpantaNum.add(mainlayervars.ultrarebirth,1)
            mainlayervars.multiplier = 0
            mainlayervars.points = 0
            mainlayervars.rebirth = 0
        }}
        if (mode == 1) {
        if (ExpantaNum.gt(mainlayervars.ultrarebirthconvert,0) == true) {
            mainlayervars.ultrarebirth = ExpantaNum.add(mainlayervars.ultrarebirth,mainlayervars.ultrarebirthconvert)
            mainlayervars.multiplier = 0
            mainlayervars.points = 0
            mainlayervars.rebirth = 0
        }}
}

function doneloading() {
    isloading = ExpantaNum.mul(isloading,0)
}
function Notation(num) {
   notation = num
   // notations IDs: 1 = suffixes, 2 = scientific
}
function toDisplay(num) {
  if (notation == 1) {
    return notationfuncs.toSuffixes(num)
  } else if (notation == 2) {
    return notationfuncs.toRoundedScientific(num)
  }
}

function unlock(feature,pointssubtraction) { // IMPORTANT: FEATURE PARAMATER NEEDS TO BE STRING
   if (ExpantaNum.gte(mainlayervars.points,pointssubtraction) == true) {
    unlocks[unlocks.length] = feature
    mainlayervars.points = ExpantaNum.sub(mainlayervars.points,pointssubtraction)
   }
}
function upgradepanel(feature) { //again, feature param MUST BE STRING 
  if (upgradepanelactive !== feature) {
    upgradepanelactive = feature
  } else {
    upgradepanelactive = "none"
  }
}
function booleanToNumber(boolean) {
    if (boolean == true) {
        return 1
    } else if (boolean == false) {
        return 0
    } else {
        throw console.error("Error: you didn't provide a boolean to convert to number or you provided non-boolean");
    }
}
function inverseBoolean(boolean) {
    if (boolean == true) {
        return false
    } else if (boolean == false) {
        return true
    } else {
        throw console.error("Error: you didn't provide a boolean to convert to opposite of itself or you provided non-boolean");
    }
}
function destroyNumWithSign(num,sign) {
    if (sign == -1) {
        if (ExpantaNum.isneg(num)) {
            return 0
        } else if (ExpantaNum.ispos(num)||ExpantaNum.eq(num,ExpantaNum.ZERO)) {
            return num
        } else {
            throw console.error(["Error: 1st parameter should be a number (ExpantaNum objects counts as numbers) || Num Parameter:",num].join(""))
        }   
    } else if (sign == 1) {
        if (ExpantaNum.ispos(num)||ExpantaNum.eq(num,ExpantaNum.ZERO)) {
            return 0
        } else if (ExpantaNum.isneg(num)) {
            return num
        } else {
            throw console.error("Error: 1st parameter should be a number (ExpantaNum objects counts as numbers)")
        }   
    } else {
        throw console.error("Error: 2nd parameter is broken (should be either 1 or -1, or expantaNum counterparts of these)")
    }
    
}
  