var points = 0
var multiplier = 1
var rebirth = 0
var ultrarebirth = 0
var prestige = 0
var multiunlock = false
var rebirthunlock = false
var urebirthunlock = false
var prestigeunlock = false
var autopoints = false
var automulti = false
var isnew = true

function Start() {
    points += (1 * multiplier)
    isnew = false
}

function Multi() {
    if (points >= 50) {
        points -= 50
        multiplier += (1 * (rebirth + 1))
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