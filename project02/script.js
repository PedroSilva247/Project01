
let time = 0
let positions = []
function redWins() {
    let endPage = document.querySelector("div#endPage")
    let winner = document.querySelector("h1#winner")
    let endBlock = document.querySelector("div#endBlock")
    let playAgainButton = document.querySelector("button#playAgain")
    endPage.classList.add("red")
    winner.classList.add("winnerRed")
    endBlock.classList.add("BlockRed")
    playAgainButton.classList.add("playAgainRed")
    winner.innerHTML = "RED WINS"
}
function blueWins() {
    let endPage = document.querySelector("div#endPage")
    let winner = document.querySelector("h1#winner")
    let endBlock = document.querySelector("div#endBlock")
    let playAgainButton = document.querySelector("button#playAgain")
    endPage.classList.add("blue")
    winner.classList.add("winnerBlue")
    endBlock.classList.add("BlockBlue")
    playAgainButton.classList.add("playAgainBlue")
    winner.innerHTML = "BLUE WINS"
}
function tie() {
    let endPage = document.querySelector("div#endPage")
    let winner = document.querySelector("h1#winner")
    let endBlock = document.querySelector("div#endBlock")
    let playAgainButton = document.querySelector("button#playAgain")
    endPage.classList.add("tie")
    winner.classList.add("winnerTie")
    endBlock.classList.add("BlockTie")
    playAgainButton.classList.add("playAgainTie")
    winner.innerHTML = "TIE"
}


function playAgain() {
    let endPage = document.querySelector("div#endPage")
    let winner = document.querySelector("h1#winner")
    let endBlock = document.querySelector("div#endBlock")
    let playAgainButton = document.querySelector("button#playAgain")
    endPage.classList.remove("red")
    endPage.classList.remove("blue")
    winner.classList.remove("winnerRed")
    winner.classList.remove("winnerBlue")
    endBlock.classList.remove("BlockRed")
    endBlock.classList.remove("BlockBlue")
    playAgainButton.classList.remove("playAgainRed")
    playAgainButton.classList.remove("playAgainBlue")
    endPage.classList.remove("tie")
    winner.classList.remove("winnerTie")
    endBlock.classList.remove("BlockTie")
    playAgainButton.classList.remove("playAgainTie")
    let p = [
        document.querySelector("img#p0"),
        document.querySelector("img#p1"),
        document.querySelector("img#p2"),
        document.querySelector("img#p3"),
        document.querySelector("img#p4"),
        document.querySelector("img#p5"),
        document.querySelector("img#p6"),
        document.querySelector("img#p7"),
        document.querySelector("img#p8")
    ]
    for (pos of p) {
        pos.src = ""
    }
    time = 0
    positions = []
}

function win() {
    let endPage = document.querySelector("div#endPage")
    if (positions[0] == positions[1] && positions[1] == positions[2] && positions[0] != undefined){
        if (positions[0] == 0) {
            return redWins()
        } else {
            return blueWins()
        }
    } else if (positions[3] == positions[4] && positions[4] == positions[5] && positions[3] != undefined) {
        if (positions[3] == 0) {
            return redWins()
        } else {
            return blueWins()
        }
    } else if (positions[6] == positions[7] && positions[7] == positions[8] && positions[6] != undefined) {
        if (positions[6] == 0) {
            return redWins()
        } else {
            return blueWins()
        }
    } else if (positions[0] == positions[3] && positions[3] == positions[6] && positions[0] != undefined) {
        if (positions[0] == 0) {
            return redWins()
        } else {
            return blueWins()
        }
    } else if (positions[1] == positions[4] && positions[4] == positions[7] && positions[1] != undefined) {
        if (positions[1] == 0) {
            return redWins()
        } else {
            return blueWins()
        }
    } else if (positions[2] == positions[5] && positions[5] == positions[8] && positions[2] != undefined) {
        if (positions[2] == 0) {
            return redWins()
        } else {
            return blueWins()
        }
    } else if (positions[0] == positions[4] && positions[4] == positions[8] && positions[0] != undefined) {
        if (positions[0] == 0) {
            return redWins()
        } else {
            return blueWins()
        }
    } else if (positions[2] == positions[4] && positions[4] == positions[6] && positions[2] != undefined) {
        if (positions[2] == 0) {
            return redWins()
        } else {
            return blueWins()
        }
    } else {
        let countCheck = 0
            for (position of positions){
                if (position == 0 || position == 1) {
                    countCheck++
                }
                if (countCheck == 9){
                    return tie()
                }
            }
    }
    
}



function p0() {
    play(0)
}
function p1() {
    play(1)
}
function p2() {
    play(2)
}
function p3() {
    play(3)
}
function p4() {
    play(4)
}
function p5() {
    play(5)
}
function p6() {
    play(6)
}
function p7() {
    play(7)
}
function p8() {
    play(8)
}
function play(pos) {
    let p = [
        document.querySelector("img#p0"),
        document.querySelector("img#p1"),
        document.querySelector("img#p2"),
        document.querySelector("img#p3"),
        document.querySelector("img#p4"),
        document.querySelector("img#p5"),
        document.querySelector("img#p6"),
        document.querySelector("img#p7"),
        document.querySelector("img#p8")
    ]
    if (positions[pos] == 0 || positions[pos] == 1){

    } else {
        if (time == 0) {
            p[pos].src = "images/X.png"
            positions[pos] = 0
        } else {
            p[pos].src = "images/O.png"
            positions[pos] = 1
        }
        
        if (time == 0) {
            time = 1
        } else {
            time = 0
        }
        win()
    }
}
