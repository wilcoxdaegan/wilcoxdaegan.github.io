var squares = document.querySelectorAll(".square")
var colorNeedStyle = document.querySelector("#colorNeed")
var colorNeed = getRandomInt(squares.length)
var message = document.querySelector("#message")
var h1 = document.querySelector("h1")
var button = document.querySelector("button")
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")
var container = document.querySelector("#container")
var isEasy = false
var j = squares.length - 1
var tries = document.querySelector("#tries")
var triesAmount = 0
var solved = false
var done = false

// This code is awful, don't look down. 

render()

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        if (this.style.background == colorNeed) {
            changeColors()
            message.textContent = "Correct!"
            h1.style.backgroundColor = colorNeed
            button.textContent = "Play again?"
            solved = true
            counter()
        } else if (this.style.background == "rgb(35, 35, 35)") {
            // Nothing, just removes the case. Works around a flag.
        } else {
            this.style.background = "#232323"
            message.textContent = "Try Again!"
            counter()
        }
    })
}

button.addEventListener("click", function () {
    restart()
})

easy.addEventListener("click", function () {
    easyMode()
})

hard.addEventListener("click", function () {
    hardMode()
})

function render() {
    for (var i = 0; i < squares.length; i++) {
        var colorRand = getColor()
        if (colorRand == "rgb(35, 35, 35") {
            colorRand = getColor()
        }

        if (!isEasy) {
            squares[i].style.background = colorRand
        } else {
            squares[i].style.background = colorRand
            if (i >= 3) {
                squares[i].style.background = "#232323"
            }
            colorNeed = squares[getRandomInt(2)].style.backgroundColor
            colorNeedStyle.textContent = colorNeed
        }

        if (i === colorNeed) {
            colorNeed = colorRand
        }
    }
    colorNeedStyle.textContent = colorNeed
}

function restart() {
    colorNeed = getRandomInt(squares.length)
    h1.style.background = "steelblue"
    message.textContent = ""
    button.textContent = "New Colors"
    triesAmount = 0
    tries.textContent = triesAmount
    solved = false
    done = false

    render()
}

function changeColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colorNeed
    }
}

function getColor() {
    r = getRandomInt(256)
    g = getRandomInt(256)
    b = getRandomInt(256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}


function easyMode() {
    if (!isEasy) {
        if (j == 6) {
            j--
        }

        restart()
        while (j >= 3) {
            squares[j].style.backgroundColor = "#232323"
            j--
        }
        colorNeed = squares[getRandomInt(3)].style.backgroundColor
        colorNeedStyle.textContent = colorNeed
        isEasy = true

        easy.classList.add("selected")
        hard.classList.remove("selected")
    }
}

function counter() {
    if (!solved && done === false) {
        triesAmount++
        tries.textContent = triesAmount
    } else if (solved && done === false) {
        triesAmount++
        tries.textContent = triesAmount
        solved = false
        done = true
    }
}

function hardMode() {
    if (isEasy) {
        restart()
        while (j < 6) {
            squares[j].style.backgroundColor = getColor()
            j++
        }
        colorNeed = squares[getRandomInt(6)].style.backgroundColor
        colorNeedStyle.textContent = colorNeed
        isEasy = false

        hard.classList.add("selected")
        easy.classList.remove("selected")
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
