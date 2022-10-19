var points = 0
var displayedpoints = 0 //the displayed points based on the notation
var pointsgainpertick = 0
var lifetimepoints = 0
var multiplier = 0
var multipliercost = 0
var multiplierconvert = 0
var mode = 0
var rebirthcost = 0
var rebirth = 0
var rebirthconvert = 0
var ultrarebirth = 0
var ultrarebirthcost = 0
var ultrarebirthconvert = 0
var teststat = 0
var upgradepanelactive = 'none'
var isloading = 1  //1 = true 0 = false
var unlocks = []
var notation = 1; 

window.onload = function() {
   Load()
   Fixstaterror()
   doneloading()
};
window.setInterval(function() {
    if (isloading == 0){
      pointsgainpertick = ExpantaNum.floor(ExpantaNum.mul(tokentotalboosts.points,ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(ultrarebirth,2),1),ExpantaNum.mul(ExpantaNum.add(ExpantaNum.div(rebirth,2),1),ExpantaNum.add(multiplier,1)))))
      points = ExpantaNum.floor(ExpantaNum.add(points,pointsgainpertick))
      lifetimepoints = ExpantaNum.floor(ExpantaNum.add(lifetimepoints,pointsgainpertick))
}},50);
window.setInterval(function() {
   saveandload.Save()
},80);
window.setInterval(function() {
    doneloading()
    Fixstaterror()
 },49);
window.setInterval(function() {
    displayedpoints = toDisplay(points)
    document.getElementById("displayedpoints").innerHTML = displayedpoints
    if (notation == 1) {
        document.getElementById("notation").innerHTML = "Suffixes"
        document.getElementById("notation").style.color = "royalblue"
    } else if (notation == 2) {
        document.getElementById("notation").innerHTML = "Scientific"
        document.getElementById("notation").style.color = "lightsteelblue"
    }
    
    document.getElementById("multiplier").innerHTML = toDisplay(multiplier)
    document.getElementById("rebirth").innerHTML = toDisplay(rebirth)
    document.getElementById("ultrarebirth").innerHTML = toDisplay(ultrarebirth)
    document.getElementById("tokenstext2").innerHTML = toDisplay(tokenvars.tokens)
    document.getElementById("tokensgain1").innerHTML = toDisplay(tokenfuncs.getTokensGain(1))
    document.getElementById("tokensgain2").innerHTML = toDisplay(tokenfuncs.getTokensGain(2))
    document.getElementById("tokensgain3").innerHTML = toDisplay(tokenfuncs.getTokensGain(3))
    document.getElementById("tokenscost1").innerHTML = toDisplay(tokenfuncs.getTokensCost(1))
    document.getElementById("tokenscost2").innerHTML = toDisplay(tokenfuncs.getTokensCost(2))
    document.getElementById("tokenscost3").innerHTML = toDisplay(tokenfuncs.getTokensCost(3))
    multipliercost = ExpantaNum.mul(ExpantaNum.add(multiplier,1),5)
    multiplierconvert = ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.div(points,multipliercost),ExpantaNum.add(rebirth,1)))
    rebirthcost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.add(rebirth,10),2),10)),10)
    rebirthconvert = ExpantaNum.floor(ExpantaNum.mul(tokentotalboosts.rebirth,ExpantaNum.mul(ExpantaNum.div(multiplier,rebirthcost),ExpantaNum.add(ultrarebirth,1))))
    if (ExpantaNum.gte(ExpantaNum.add(ultrarebirth,ultrarebirthconvert),30)) {
        ultrarebirthcost = ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(2.5,ultrarebirth),12.5),ExpantaNum.add(1,ExpantaNum.div(ultrarebirth,10))),2),10)),10),9)
        ultrarebirthconvert = destroyNumWithSign(ExpantaNum.floor(ExpantaNum.add(ExpantaNum.logarithm(ExpantaNum.div(rebirth,ExpantaNum.root(ultrarebirthcost,9)),6),ExpantaNum.sub(30,ultrarebirth))),-1)
    } else {
        ultrarebirthcost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(2.5,ultrarebirth),12.5),ExpantaNum.add(1,ExpantaNum.div(ultrarebirth,10))),2),10)),10)
        ultrarebirthconvert = ExpantaNum.floor(ExpantaNum.div(rebirth,ultrarebirthcost))
    }
    if (mode == 0) {
    document.getElementById("multipliercost").innerHTML = toDisplay(multipliercost)
    document.getElementById("multiplieramount").innerHTML = "1"
    document.getElementById("rebirthcost").innerHTML = toDisplay(rebirthcost)
    document.getElementById("rebirthamount").innerHTML = "1"
    document.getElementById("ultrarebirthcost").innerHTML = toDisplay(ultrarebirthcost)
    document.getElementById("ultrarebirthamount").innerHTML = "1"
    document.getElementById("mode").innerHTML = "Buy singles"
    document.getElementById("mode").style.color = "greenyellow"
    }
    if (mode == 1) {
        document.getElementById("multipliercost").innerHTML = "All"
        document.getElementById("multiplieramount").innerHTML = toDisplay(multiplierconvert)
        document.getElementById("rebirthcost").innerHTML = "1 rebirth when converted"
        document.getElementById("rebirthamount").innerHTML = toDisplay(rebirthconvert)
        document.getElementById("ultrarebirthcost").innerHTML = "1 ultrarebirth when converted"
        document.getElementById("ultrarebirthamount").innerHTML = toDisplay(ultrarebirthconvert)
        document.getElementById("mode").innerHTML = "Buy max"
        document.getElementById("mode").style.color = "lightskyblue"
    }
},50);
function Multiplier() { 
    if (mode == 0) {
        if (ExpantaNum.gte(points,multipliercost) == true) {
        multiplier = ExpantaNum.add(multiplier,ExpantaNum.add(1, rebirth))
        points = ExpantaNum.sub(points,multipliercost)
    }}
    if (mode == 1) {
        if (ExpantaNum.gt(multiplierconvert,0) == true) {
        multiplier = ExpantaNum.add(multiplier,multiplierconvert)
        points = 0
    }}
;}
function Mode(number) {
    mode = number
}
function Rebirth() {
    if (mode == 0) {
    if (ExpantaNum.gte(multiplier,rebirthcost) == true) {
        rebirth = ExpantaNum.add(rebirth,ExpantaNum.add(1,ultrarebirth))
        multiplier = 0
        points = 0
    }}
    if (mode == 1) {
    if (ExpantaNum.gt(rebirthconvert,0) == true) {
        rebirth = ExpantaNum.add(rebirth,rebirthconvert)
        multiplier = 0
        points = 0
    }}
}
function Test() {
    teststat = teststat + 1
}
function Ultrarebirth() {
    if (mode == 0) {
        if (ExpantaNum.gte(rebirth,ultrarebirthcost) == true) {
            ultrarebirth = ExpantaNum.add(ultrarebirth,1)
            multiplier = 0
            points = 0
            rebirth = 0
        }}
        if (mode == 1) {
        if (ExpantaNum.gt(ultrarebirthconvert,0) == true) {
            ultrarebirth = ExpantaNum.add(ultrarebirth,ultrarebirthconvert)
            multiplier = 0
            points = 0
            rebirth = 0
        }}
}
function Fixstaterror() {
    points = ExpantaNum.add(points,0)
    multiplier = ExpantaNum.add(multiplier,0.000001)
    rebirth = ExpantaNum.add(rebirth,0.000001)
    ultrarebirth = ExpantaNum.add(ultrarebirth,0.000001)
    tokenvars.tokens = ExpantaNum.add(tokenvars.tokens,0.000001)
    multiplier = ExpantaNum.floor(multiplier)
    rebirth = ExpantaNum.floor(rebirth)
    ultrarebirth = ExpantaNum.floor(ultrarebirth)
    tokenvars.tokens = ExpantaNum.floor(tokenvars.tokens)
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
   if (ExpantaNum.gte(points,pointssubtraction) == true) {
    unlocks[unlocks.length] = feature
    points = ExpantaNum.sub(points,pointssubtraction)
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
  