let home = document.getElementById("home")
let away = document.getElementById("away")

let countHome = 0
let countAway = 0

function add1pointH() {
    countHome +=1
    home.textContent = countHome
}
function add2pointH() {
    countHome +=2
    home.textContent = countHome
}
function add3pointH() {
    countHome +=3
    home.textContent = countHome
}
function add1pointA() {
    countAway +=1
    away.textContent = countAway
}
function add2pointA() {
    countAway +=2
    away.textContent = countAway
}
function add3pointA() {
    countAway +=3
    away.textContent = countAway
}
function newgame(){
    countAway = 0
    countHome = 0
    home.textContent = 0
    away.textContent = 0
}