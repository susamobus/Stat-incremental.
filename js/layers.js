var points = 0
var multiplier = 1
var multiunlock = false
var autopoints = false
var isnew = true

function Start() {
    points += (1 * multiplier)
    isnew = false
}

function Multi() {
    if (points >= 50) {
        points -= 50
        multiplier += 1
    }
}

function MultiUnlock() {
    if (points >= 100) {
        points -= 100
        multiunlock = true
    }
}

function AutoPoints() {
    if (points >= 10) {
        points -= 10
        autopoints = true
    }
}