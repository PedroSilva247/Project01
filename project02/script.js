
let time = 0
let positions = [
    
]
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
    let checkBox = document.querySelector("input#checkBoxComputer")
    // if (checkBox.checked) {
    //     play(computer(positions))
    // }
}
function p1() {
    play(1)
    let checkBox = document.querySelector("input#checkBoxComputer")
    // if (checkBox.checked) {
    //     play(computer(positions))
    // }
}
function p2() {
    play(2)
    let checkBox = document.querySelector("input#checkBoxComputer")
    // if (checkBox.checked) {
    //     play(computer(positions))
    // }
}
function p3() {
    play(3)
    let checkBox = document.querySelector("input#checkBoxComputer")
    // if (checkBox.checked) {
    //     play(computer(positions))
    // }
}
function p4() {
    play(4)
    let checkBox = document.querySelector("input#checkBoxComputer")
    // if (checkBox.checked) {
    //     play(computer(positions))
    // }
}
function p5() {
    play(5)
    let checkBox = document.querySelector("input#checkBoxComputer")
    // if (checkBox.checked) {
    //     play(computer(positions))
    // }
}
function p6() {
    play(6)
    let checkBox = document.querySelector("input#checkBoxComputer")
    // if (checkBox.checked) {
    //     play(computer(positions))
    // }
}
function p7() {
    play(7)
    let checkBox = document.querySelector("input#checkBoxComputer")
    // if (checkBox.checked) {
    //     play(computer(positions))
    // }
}
function p8() {
    play(8)
    let checkBox = document.querySelector("input#checkBoxComputer")
    // if (checkBox.checked) {
    //     play(computer(positions))
    // }
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
        
        win()
        
        if (time == 0) {
            time = 1
        } else {
            time = 0
        }
        let checkBox = document.querySelector("input#checkBoxComputer")
        if (time == 1 && checkBox.checked) {
            play(computer(positions))
        }
    }
}

function computer(ps) {

    
    switch (true) {
        case ps[0] == ps[1] && ps[0] != undefined:
            if (ps[2] != 1 && ps[2] != 0) {
                return 2
            }
        case ps[1] == ps[2] && ps[1] != undefined:
            if (ps[0] != 1 && ps[0] != 0) {
                return 0
            }
        case ps[0] == ps[2] && ps[0] != undefined: 
            if (ps[1] != 1 && ps[1] != 0) {
                return 1
            }
        case ps[3] == ps[4] && ps[3] != undefined: 
            if (ps[5] != 1 && ps[5] != 0) {
                return 5
            }
        case ps[4] == ps[5] && ps[4] != undefined: 
            if (ps[3] != 1 && ps[3] != 0) {
                return 3
            } 
        case ps[3] == ps[5] && ps[3] != undefined: 
            if (ps[4] != 1 && ps[4] != 0) {
                return 4
            }
        case ps[6] == ps[7] && ps[6] != undefined: 
            if (ps[8] != 1 && ps[8] != 0) {
                return 8
            } 
        case ps[7] == ps[8] && ps[7] != undefined: 
            if (ps[6] != 1 && ps[6] != 0) {
                return 6
            }
        case ps[6] == ps[8] && ps[6] != undefined: 
            if (ps[7] != 1 && ps[7] != 0) {
                return 7
            }
        case ps[0] == ps[3] && ps[0] != undefined: 
            if (ps[6] != 1 && ps[6] != 0) {
                return 6
            } 
        case ps[3] == ps[6] && ps[3] != undefined: 
            if (ps[0] != 1 && ps[0] != 0) {
                return 0
            }
        case ps[0] == ps[6] && ps[0] != undefined: 
            if (ps[3] != 1 && ps[3] != 0) {
                return 3
            }
        case ps[1] == ps[4] && ps[1] != undefined: 
            if (ps[7] != 1 && ps[7] != 0) {
                return 7
            }
        case ps[4] == ps[7] && ps[4] != undefined: 
            if (ps[1] != 1 && ps[1] != 0) {
                return 1
            } 
        case ps[1] == ps[7] && ps[1] != undefined: 
            if (ps[4] != 1 && ps[4] != 0) {
                return 4
            } 
        case ps[2] == ps[5] && ps[2] != undefined: 
            if (ps[8] != 1 && ps[8] != 0) {
                return 8
            } 
        case ps[2] == ps[8] && ps[2] != undefined: 
            if (ps[5] != 1 && ps[5] != 0) {
                return 5
            } 
        case ps[5] == ps[8] && ps[5] != undefined: 
            if (ps[2] != 1 && ps[2] != 0) {
                return 2
            } 
        case ps[0] == ps[4] && ps[0] != undefined: 
            if (ps[8] != 1 && ps[8] != 0) {
                return 8
            } 
        case ps[4] == ps[8] && ps[4] != undefined: 
            if (ps[0] != 1 && ps[0] != 0) {
                return 0
            } 
        case ps[0] == ps[8] && ps[0] != undefined: 
            if (ps[4] != 1 && ps[4] != 0) {
                return 4
            } 
        case ps[2] == ps[4] && ps[2] != undefined: 
            if (ps[6] != 1 && ps[6] != 0) {
                return 6
            } 
            
        case ps[4] == ps[6] && ps[4] != undefined: 
            if (ps[2] != 1 && ps[2] != 0) {
                return 2
            } 
        case ps[2] == ps[6] && ps[2] != undefined: 
            if (ps[4] != 1 && ps[4] != 0) {
                return 4
            }
        default:
            for (let cont=0;cont<9;cont++) {
                if (ps[cont] != 0 && ps[cont] != 1){
                    return cont
                }
            }
            break
    }
    
}