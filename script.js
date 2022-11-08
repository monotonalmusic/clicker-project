let count = 0
let multiplier = 1
let currentCost = 100
let currentCost2 = 200 
let amount = 0

function buttonCount() {
    count += (1 * multiplier)
    updateAmount()
    update()
    
}

function moreCookies(){
    count += (1 * multiplier)
    update()
}

function updateAmount() {
    amount ++
}

function countMultiplier() {
    if (currentCost <= count) {
        multiplier ++
        count = Math.round(count - currentCost)
        currentCost = Math.round(currentCost * 1.5)
        update()
    }
    
    else {
        alert("error!")
    }
}

function autoClicker() {
    if (currentCost2 <= count) {
    count = Math.round(count - currentCost2)
    currentCost2 = Math.round(currentCost2 * 1.5)
    setInterval(moreCookies, 1000)
    update()
    }
    else {
        alert ("not enough!")
    }
}



function update() {
    document.getElementById('count').innerHTML = count + " cookies"
    document.getElementById('amount').innerHTML = "You have a clicked a total of " + amount + " times"
    document.getElementById('multiplier').innerHTML = "Multiplier: " + multiplier;
    document.getElementById('current').innerHTML = "Next Upgrade: " + currentCost;
}