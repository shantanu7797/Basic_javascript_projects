
let block = document.querySelectorAll(".block")
let showChance = document.querySelector(".showChance")
let reset = document.querySelector(".reset")
let showPrompt = document.querySelector(".showPrompt")
let turn = "X";
let count = 0;
let gameOver = false;
let draw = false;

showChance.innerHTML = `Turn for ${turn} `

// function to change the turn
const changeTurn = () => {
    if (turn === "X") {
        return "0"
    }
    else {
        return "X"
    }
}


const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((block[e[0]].innerHTML === block[e[1]].innerHTML) && (block[e[2]].innerHTML === block[e[1]].innerHTML) && (block[e[0]].innerHTML !== "")) {
            showChance.innerHTML = `${block[e[0]].innerHTML} Won`
            gameOver = true
        }
    })
}

const checkDraw = () => {
    if (count >= 9) {
        return draw = true
    }
}


Array.from(block).forEach(element => {
    // let boxText = element.querySelector(".block")
    element.addEventListener("click", function (ele) {
        if (!gameOver && element.innerHTML === '') {
            count++
            console.log(count)
            element.innerHTML = turn
            turn = changeTurn()
            checkWin()
            checkDraw()
            if (!gameOver) {
                if(draw){
                    showPrompt.innerHTML = `Game Over!`
                    showChance.innerHTML = `It's a draw! `
                }
                else {
                    showChance.innerHTML = `Turn for ${turn} `
                }
            }
            else {
                showPrompt.innerHTML = `Game Over!`
            }
        }
    })
});

reset.addEventListener("click", function () {
    Array.from(block).forEach(element => {
        element.innerHTML = ""
    })
    turn = "X"
    gameOver = false
    draw = false
    showChance.innerHTML = `Turn for ${turn} `
    showPrompt.innerHTML = ``
    count = 0
})