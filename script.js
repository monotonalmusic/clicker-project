let count = 0
let multiplier = 1
let currentCost = 50
let currentCost2 = 100 
let currentCost3 = 300
let lottocost = 10000
//refers to click amount
let amount = 0
//gnome #
let autoNumber = 0
let autoCount = 0
//grandma #
let grandmaNumber = 0
let grandmaCount = 0
let totalCount = 0


function buttonCount() {
    count += (1 * multiplier)
    totalCount += (1 * multiplier)
    amount ++
    update()
    
}

function moreCookies() {
    count += (2 * autoNumber)
    autoCount += (2 * autoNumber)
    totalCount += (2 * autoNumber)
    update()
}

function grandmaCookies() {
    count += (10 * grandmaNumber)
    grandmaCount += (10 * grandmaNumber)
    totalCount += (10 * grandmaNumber)
    update()
    
}

function countMultiplier() {
    if (currentCost <= count) {
        multiplier ++
        count = Math.round(count - currentCost)
        currentCost = Math.round(currentCost * 1.5)
        update()
    }
    else {
        alert("need more cookies!")
    }
}

function autoClicker() {
    if (currentCost2 <= count) {
    autoNumber ++
    count = Math.round(count - currentCost2)
    currentCost2 = Math.round(currentCost2 * 1.75)
    setInterval(moreCookies, 1000)
    update()
    }
    else {
        alert ("More cookies!")
    }
}

function grandmaClicker() {
    if (currentCost3 <= count) {
    grandmaNumber ++
    count = Math.round(count - currentCost3)
    currentCost3 = Math.round(currentCost3 * 1.75)
    setInterval(grandmaCookies, 2000)
    update()
    }
    else {
        alert ("More cookies!")
    }
}

function cheat() {
    count += 10000000
    update()
}

function lottery() {
    if (lottocost <= count) {
    let winnings = Math.floor(Math.random() * 20000)
    count += winnings
    alert ("You won " + winnings + " cookies in the lottery!")
    count = Math.round(count - lottocost)
    update()
    }
    else {
        alert ("More cookies!")
    }
}



function update() {
    document.getElementById('count').innerHTML = count; 
    document.getElementById('amount').innerHTML = amount;
    document.getElementById('multiplier').innerHTML = multiplier;
    document.getElementById('current').innerHTML = currentCost;
    document.getElementById('autonum').innerHTML = autoNumber;
    document.getElementById('current2').innerHTML = currentCost2;
    document.getElementById('grandma-cost').innerHTML = currentCost3;
    document.getElementById('grandmas').innerHTML = grandmaNumber;
    document.getElementById('autocount').innerHTML = autoCount;
    document.getElementById('grandmacount').innerHTML = grandmaCount;
    document.getElementById('totalcount').innerHTML = totalCount;

}
