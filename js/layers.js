var points = 0
var multiplier = 0
var multiunlock = false
var isnew = true

function Start() {
    points += 1
    isnew = false
}

function Multi() {
    multiplier += 1
}

function MultiUnlock() {
    if (points >= 100) {
        points -= 100
        multiunlock = true
    }
}