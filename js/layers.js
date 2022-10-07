var points = "0"
var multiplier = "1"
var rebirth = "0"
var ultrarebirth = "0"
var prestige = "0"
var multiunlock = false
var rebirthunlock = false
var urebirthunlock = false
var prestigeunlock = false
var autopoints = false
var automulti = false
var isnew = true

function Start() {
    points = ExpantaNum.add(ExpantaNum.mul(1,multiplier),points).toString()
    isnew = false
}

function Multi() {
    if (ExpantaNum.gt(points,50)) {
        points = ExpantaNum.sub(points,50).toString()
        multiplier = ExpantaNum.add(multiplier,ExpantaNum.mul(1,ExpantaNum.add(rebirth,1))).toString()
    }
}

function MultiUnlock() {
    if (points >= 100) {
        points -= 100
        multiunlock = true
    }
}

function RebirthUnlock() {
    if (multiplier >= 50) {
        multiplier -= 50
        rebirthunlock = true
    }
}

function AutoPoints() {
    if (autopoints == false) {
        if (points >= 10) {
            points -= 10
            autopoints = true
        }
    }
}