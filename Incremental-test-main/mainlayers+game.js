var sus = 0
var displayedsus = 0 //the displayed sus based on the notation
var susgainpertick = 0
var lifetimesus = 0
var amogus = 0
var amoguscost = 0
var amogusconvert = 0
var mode = 0
var crewmatecost = 0
var crewmate = 0
var crewmateconvert = 0
var impostor = 0
var impostorcost = 0
var impostorconvert = 0
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
      susgainpertick = ExpantaNum.floor(ExpantaNum.mul(tokentotalboosts.sus,ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(impostor,2),1),ExpantaNum.mul(ExpantaNum.add(ExpantaNum.div(crewmate,2),1),ExpantaNum.add(amogus,1)))))
      sus = ExpantaNum.floor(ExpantaNum.add(sus,susgainpertick))
      lifetimesus = ExpantaNum.floor(ExpantaNum.add(lifetimesus,susgainpertick))
}},50);
window.setInterval(function() {
   saveandload.Save()
},80);
window.setInterval(function() {
    doneloading()
    Fixstaterror()
 },49);
window.setInterval(function() {
    displayedsus = toDisplay(sus)
    document.getElementById("displayedsus").innerHTML = displayedsus
    if (notation == 1) {
        document.getElementById("notation").innerHTML = "Suffixes"
        document.getElementById("notation").style.color = "royalblue"
    } else if (notation == 2) {
        document.getElementById("notation").innerHTML = "Scientific"
        document.getElementById("notation").style.color = "lightsteelblue"
    }
    
    document.getElementById("amogus").innerHTML = toDisplay(amogus)
    document.getElementById("crewmate").innerHTML = toDisplay(crewmate)
    document.getElementById("impostor").innerHTML = toDisplay(impostor)
    document.getElementById("tokenstext2").innerHTML = toDisplay(tokenvars.tokens)
    document.getElementById("tokensgain1").innerHTML = toDisplay(tokenfuncs.getTokensGain(1))
    document.getElementById("tokensgain2").innerHTML = toDisplay(tokenfuncs.getTokensGain(2))
    document.getElementById("tokensgain3").innerHTML = toDisplay(tokenfuncs.getTokensGain(3))
    document.getElementById("tokenscost1").innerHTML = toDisplay(tokenfuncs.getTokensCost(1))
    document.getElementById("tokenscost2").innerHTML = toDisplay(tokenfuncs.getTokensCost(2))
    document.getElementById("tokenscost3").innerHTML = toDisplay(tokenfuncs.getTokensCost(3))
    amoguscost = ExpantaNum.mul(ExpantaNum.add(amogus,1),5)
    amogusconvert = ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.div(sus,amoguscost),ExpantaNum.add(crewmate,1)))
    crewmatecost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.add(crewmate,10),2),10)),10)
    crewmateconvert = ExpantaNum.floor(ExpantaNum.mul(tokentotalboosts.crewmate,ExpantaNum.mul(ExpantaNum.div(amogus,crewmatecost),ExpantaNum.add(impostor,1))))
    if (ExpantaNum.gte(ExpantaNum.add(impostor,impostorconvert),30)) {
        impostorcost = ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(2.5,impostor),12.5),ExpantaNum.add(1,ExpantaNum.div(impostor,10))),2),10)),10),9)
        impostorconvert = destroyNumWithSign(ExpantaNum.floor(ExpantaNum.add(ExpantaNum.logarithm(ExpantaNum.div(crewmate,ExpantaNum.root(impostorcost,9)),6),ExpantaNum.sub(30,impostor))),-1)
    } else {
        impostorcost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(2.5,impostor),12.5),ExpantaNum.add(1,ExpantaNum.div(impostor,10))),2),10)),10)
        impostorconvert = ExpantaNum.floor(ExpantaNum.div(crewmate,impostorcost))
    }
    if (mode == 0) {
    document.getElementById("amoguscost").innerHTML = toDisplay(amoguscost)
    document.getElementById("amogusamount").innerHTML = "1"
    document.getElementById("crewmatecost").innerHTML = toDisplay(crewmatecost)
    document.getElementById("crewmateamount").innerHTML = "1"
    document.getElementById("impostorcost").innerHTML = toDisplay(impostorcost)
    document.getElementById("impostoramount").innerHTML = "1"
    document.getElementById("mode").innerHTML = "Buy singles"
    document.getElementById("mode").style.color = "greenyellow"
    }
    if (mode == 1) {
        document.getElementById("amoguscost").innerHTML = "All"
        document.getElementById("amogusamount").innerHTML = toDisplay(amogusconvert)
        document.getElementById("crewmatecost").innerHTML = "1 crewmate when converted"
        document.getElementById("crewmateamount").innerHTML = toDisplay(crewmateconvert)
        document.getElementById("impostorcost").innerHTML = "1 impostor when converted"
        document.getElementById("impostoramount").innerHTML = toDisplay(impostorconvert)
        document.getElementById("mode").innerHTML = "Buy max"
        document.getElementById("mode").style.color = "lightskyblue"
    }
},50);
function Amogus() { 
    if (mode == 0) {
        if (ExpantaNum.gte(sus,amoguscost) == true) {
        amogus = ExpantaNum.add(amogus,ExpantaNum.add(1, crewmate))
        sus = ExpantaNum.sub(sus,amoguscost)
    }}
    if (mode == 1) {
        if (ExpantaNum.gt(amogusconvert,0) == true) {
        amogus = ExpantaNum.add(amogus,amogusconvert)
        sus = 0
    }}
;}
function Mode(number) {
    mode = number
}
function Crewmate() {
    if (mode == 0) {
    if (ExpantaNum.gte(amogus,crewmatecost) == true) {
        crewmate = ExpantaNum.add(crewmate,ExpantaNum.add(1,impostor))
        amogus = 0
        sus = 0
    }}
    if (mode == 1) {
    if (ExpantaNum.gt(crewmateconvert,0) == true) {
        crewmate = ExpantaNum.add(crewmate,crewmateconvert)
        amogus = 0
        sus = 0
    }}
}
function Test() {
    teststat = teststat + 1
}
function Impostor() {
    if (mode == 0) {
        if (ExpantaNum.gte(crewmate,impostorcost) == true) {
            impostor = ExpantaNum.add(impostor,1)
            amogus = 0
            sus = 0
            crewmate = 0
        }}
        if (mode == 1) {
        if (ExpantaNum.gt(impostorconvert,0) == true) {
            impostor = ExpantaNum.add(impostor,impostorconvert)
            amogus = 0
            sus = 0
            crewmate = 0
        }}
}
function Fixstaterror() {
    sus = ExpantaNum.add(sus,0)
    amogus = ExpantaNum.add(amogus,0.000001)
    crewmate = ExpantaNum.add(crewmate,0.000001)
    impostor = ExpantaNum.add(impostor,0.000001)
    tokenvars.tokens = ExpantaNum.add(tokenvars.tokens,0.000001)
    amogus = ExpantaNum.floor(amogus)
    crewmate = ExpantaNum.floor(crewmate)
    impostor = ExpantaNum.floor(impostor)
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

function unlock(feature,sussubtraction) { // IMPORTANT: FEATURE PARAMATER NEEDS TO BE STRING
   if (ExpantaNum.gte(sus,sussubtraction) == true) {
    unlocks[unlocks.length] = feature
    sus = ExpantaNum.sub(sus,sussubtraction)
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
  