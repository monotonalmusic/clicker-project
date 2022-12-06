let currentCookies = 0
let currentMultiplier = 1
let multiCost = 50
let gnomeCost = 100 
let grandmaCost = 300
let lottoCost = 10000
//refers to click amount
let clickAmount = 0
//gnome #
let gnomeNumber = 0
let gnomeCount = 0
//grandma #
let grandmaNumber = 0
let grandmaCount = 0
let totalProduced = 0


function buttonCount() {
    currentCookies += (1 * currentMultiplier)
    totalProduced += (1 * currentMultiplier)
    clickAmount ++
    update()
    
}

function gnomeCookies() {
    currentCookies += (2 * gnomeNumber)
    gnomeCount += (2 * gnomeNumber)
    totalProduced += (2 * gnomeNumber)
    console.log(gnomeCount)
    update()
}

function grandmaCookies() {
    currentCookies += (10 * grandmaNumber)
    grandmaCount += (10 * grandmaNumber)
    totalProduced += (10 * grandmaNumber)
    update()
    
}

function countMultiplier() {
    if (multiCost <= currentCookies) {
        currentMultiplier ++
        currentCookies = Math.round(currentCookies - multiCost)
        multiCost = Math.round(multiCost * 1.5)
        update()
    }
    else {
        alert("need more cookies!")
    }
}

function gnomeClicker() {
    console.log('hi')
    autoClicker(gnomeCost, gnomeNumber, gnomeCookies)
}

function autoClicker(cost, number, cookies) {
    if (cost <= currentCookies) {
        number ++
        currentCookies = Math.round(currentCookies - cost)
        cost = Math.round(cost * 1.75)
        setInterval(cookies, 1000)
        update()
    }
    else {
        alert ("More cookies!")
    }
}

function grandmaClicker() {
    if (grandmaCost <= currentCookies) {
    grandmaNumber ++
    currentCookies = Math.round(currentCookies - grandmaCost)
    grandmaCost = Math.round(grandmaCost * 1.75)
    setInterval(grandmaCookies, 2000)
    update()
    }
    else {
        alert ("More cookies!")
    }
}

function cheat() {
    currentCookies += 100000
    update()
}

function lottery() {
    if (lottoCost <= currentCookies) {
    let winnings = Math.floor(Math.random() * 20000)
    currentCookies += winnings
    alert ("You won " + winnings + " cookies in the lottery!")
    currentCookies = Math.round(currentCookies - lottoCost)
    update()
    }
    else {
        alert ("More cookies!")
    }
}



function update() {
    console.log('I am updating')
    document.getElementById('count').innerHTML = currentCookies; 
    document.getElementById('amount').innerHTML = clickAmount;
    document.getElementById('multiplier').innerHTML = currentMultiplier;
    document.getElementById('current').innerHTML = multiCost;
    document.getElementById('autonum').innerHTML = gnomeNumber;
    document.getElementById('current2').innerHTML = gnomeCost;
    document.getElementById('grandma-cost').innerHTML = grandmaCost;
    document.getElementById('grandmas').innerHTML = grandmaNumber;
    document.getElementById('autocount').innerHTML = gnomeCount;
    document.getElementById('grandmacount').innerHTML = grandmaCount;
    document.getElementById('totalcount').innerHTML = totalProduced;

}
