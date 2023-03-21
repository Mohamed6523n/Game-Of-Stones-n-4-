
let r = Number(prompt('enter a number Of Stones '))

$('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)


// ================= Player 1 ===================

function player1Reduce1() {

    if (r >= 1) {
        r--

    } else {
        alert('PLayer 1 win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)


}

function player1Reduce2() {


    if (r >= 1) {
        if (r <= 1) {
            alert('not valid')
        } else {
            r = r - 2

        }
    } else if (r == 0) {
        alert('NOt Valid')
    } else {
        alert('Player 2 Is Win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)

}


// ================= Player 2

function player2Reduce1() {

    if (r >= 1) {
        r--

    } else {
        alert('PLayer 2 win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)


}



function player2Reduce2() {


    if (r >= 1) {
        if (r <= 1) {
            alert('not valid')
        } else {
            r = r - 2

        }


    } else if (r == 0) {
        alert('NOt Valid')
    } else {
        alert('Player 2 Is Win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)

}



// ===============  Player 3 =====================

function player3Reduce1() {

    if (r >= 1) {
        r--

    } else {
        alert('PLayer 3 win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)


}

function player3Reduce2() {


    if (r >= 1) {
        if (r <= 1) {
            alert('not valid')
        } else {
            r = r - 2

        }
    } else if (r == 0) {
        alert('NOt Valid')
    } else {
        alert('Player 3 Is Win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)

}

// ===============  Player 4 =====================

function player4Reduce1() {

    if (r >= 1) {
        r--

    } else {
        alert('PLayer 4 win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)


}

function player4Reduce2() {


    if (r >= 1) {
        if (r <= 1) {
            alert('not valid')
        } else {
            r = r - 2

        }
    } else if (r == 0) {
        alert('NOt Valid')
    } else {
        alert('Player 4 Is Win')
    }
    $('.reman').html(`<h3 class="shadow inner rounded-3  m-auto bg-dark border border-2 text-white">${r}</h3>`)

}







// ================ Play Again ==================
function playAgin() {
    if (r == 0) {
        location.reload()
    }

}