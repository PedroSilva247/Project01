
let time = 0
let positions = []
function someoneWins() {
    let endPage = document.querySelector("div#endPage")
    if (positions[0] == 0) {
        endPage.classList.add("red")
    } else {
        endPage.classList.add("blue")
    }
}

function win() {
    let endPage = document.querySelector("div#endPage")
    if (positions[0] == positions[1] && positions[1] == positions[2] && positions[0] != undefined){
        if (positions[0] == 0) {
            endPage.classList.add("red")
        } else {
            endPage.classList.add("blue")
        }
    } else if (positions[3] == positions[4] && positions[4] == positions[5] && positions[3] != undefined) {
        if (positions[3] == 0) {
            endPage.classList.add("red")
        } else {
            endPage.classList.add("blue")
        }
    } else if (positions[6] == positions[7] && positions[7] == positions[8] && positions[6] != undefined) {
        if (positions[6] == 0) {
            endPage.classList.add("red")
        } else {
            endPage.classList.add("blue")
        }
    } else if (positions[0] == positions[3] && positions[3] == positions[6] && positions[0] != undefined) {
        if (positions[0] == 0) {
            endPage.classList.add("red")
        } else {
            endPage.classList.add("blue")
        }
    } else if (positions[1] == positions[4] && positions[4] == positions[7] && positions[1] != undefined) {
        if (positions[1] == 0) {
            endPage.classList.add("red")
        } else {
            endPage.classList.add("blue")
        }
    } else if (positions[2] == positions[5] && positions[5] == positions[8] && positions[2] != undefined) {
        if (positions[2] == 0) {
            endPage.classList.add("red")
        } else {
            endPage.classList.add("blue")
        }
    } else if (positions[0] == positions[4] && positions[4] == positions[8] && positions[0] != undefined) {
        if (positions[0] == 0) {
            endPage.classList.add("red")
        } else {
            endPage.classList.add("blue")
        }
    } else if (positions[2] == positions[4] && positions[4] == positions[6] && positions[2] != undefined) {
        if (positions[2] == 0) {
            endPage.classList.add("red")
        } else {
            endPage.classList.add("blue")
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
