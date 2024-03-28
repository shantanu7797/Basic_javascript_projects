let btn_all = document.querySelectorAll(".btn_all")
let block1 = document.querySelector(".block1")
let block2 = document.querySelector(".block2")

let block1_line1 = document.querySelector(".block1_line1")
let block1_line2 = document.querySelector(".block1_line2")
let block1_line3 = document.querySelector(".block1_line3")
let block1_line4 = document.querySelector(".block1_line4")
let block1_line5 = document.querySelector(".block1_line5")

let block2_line2 = document.querySelector(".block2_line2")
let block2_line3 = document.querySelector(".block2_line3")
let restart = document.querySelector(".block2_btn")
var c = 0, u = 0, r = 0, d = 0;


async function random() {
    let random = Math.floor(Math.random() * 100)
    let c_side = ""

    if (random >= 0 && random <= 33) {
        c_side = "rock";
    }
    else if (random > 33 && random <= 67) {
        c_side = "paper";
    }
    else {
        if (random > 67 && random <= 100) {
            c_side = "scissor";
        }
    }
    return c_side;
}


async function checkWinner(comp, user) {
    if (comp === user) {
        r++, d++
        block1_line1.innerHTML = "It's a draw!"
    }
    else if (comp === "rock" && user === "paper") {
        r++, u++
        block1_line1.innerHTML = "You win"
    }
    else if (comp === "rock" && user === "scissor") {
        r++, c++
        block1_line1.innerHTML = "Computer win"
    }
    else if (comp === "paper" && user === "scissor") {
        r++, u++
        block1_line1.innerHTML = "You win"
    }
    else if (comp === "paper" && user === "rock") {
        r++, c++
        block1_line1.innerHTML = "Computer win"
    }
    else if (comp === "scissor" && user === "rock") {
        r++, u++
        block1_line1.innerHTML = "You win"
    }
    else if (comp === "scissor" && user === "paper") {
        r++, c++
        block1_line1.innerHTML = "Computer win"
    }

    block1_line2.innerHTML = `Round: ${r} of 5`
    block1_line3.innerHTML = `Player Score: ${u}`
    block1_line4.innerHTML = `Computer Score: ${c}`
    block1_line5.innerHTML = `Game Draw: ${d}`
}

function showRes(){
    if(c === u){
        block2_line2.innerHTML = `The game ends in a draw!`
    }
    else if(c > u){
        block2_line2.innerHTML = `Computer win the game`
    }
    else if(c < u){
        block2_line2.innerHTML = `You win the game`
    }
    block2_line3.innerHTML = `Final Score - You: ${u} | Computer: ${c}`
    block1.classList.add("hidden")
    block2.classList.remove("hidden")
    block2.classList.add("block")
    
}

btn_all.forEach((e) => {
    e.addEventListener("click", async () => {
        let c_side = await random()
        console.log(c_side)
        let u_side = e.dataset.id
        console.log(u_side)
        await checkWinner(c_side, u_side)

        if (r == "5"){
            showRes()
        }
    })
})

restart.addEventListener("click", ()=>{
    block2.classList.remove("block")
    block2.classList.add("hidden")
    block1.classList.remove("hidden")

    block1_line2.innerHTML = `Round: 1 of 5`
    block1_line3.innerHTML = `Player Score: 0`
    block1_line4.innerHTML = `Computer Score: 0`
    block1_line5.innerHTML = `Game Draw: 0`

    c = 0, u = 0, r = 0, d = 0;
})



