// Salesboard App

let totalSales = []
let timesClicked = 0
let achievementsUnlocked = 0
let achievementsBadge = []
let achievementsBadgeTwo = false
let totalRevenue = 0
let totalCommision = 0

let productA = {
    emoji: "⭐",
    revenue: 200,
    commision: 50
}
let productB = {
    emoji: "🔥",
    revenue: 300,
    commision: 75
}



// Setup
// Some interaction: the sales buttons
const paBtn = document.getElementById('btn-productA')
const pbBtn = document.getElementById('btn-productB')
// Show the correct emoji on those sales buttons
paBtn.textContent = productA.emoji
pbBtn.textContent = productB.emoji
// Let them listen for clicks & when they're hit fire a sales function
paBtn.addEventListener('click', function () { salesA() })
pbBtn.addEventListener('click', function () { salesB() })

// Showing the sales results in the HTML
const salesHeader = document.getElementById('sales-header')
const salesBar = document.getElementById('sales-bar')
const achievementsHeader = document.getElementById('achievements-header')
const achievementsBar = document.getElementById('achievements-bar')
// initally they're empty (need to refactor this when we're using local storage)
salesBar.textContent = achievementsBar.textContent = ''

// Showing the revenue and commision in the HTML
const revenueBar = document.getElementById('revenue-bar')
const commisionBar = document.getElementById('commision-bar')

renderSales()

// Sales
// Clicking the sales buttons will:
// 1. update totalSales array with sales
// 2. update "Live Sales" in the HTML with the content of the totalSales array
// 3. update "Live Sales" with times either of the two buttons is clicked
// 4. update totalRevenue and totalCommision with values set in respective product arrays
// 5. update totalRevenue and totalCommision in the HTML with the content of their arrays
function salesA() {
    // console.log(`product A ${productA.emoji}`) // check
    totalSales += productA.emoji
    totalRevenue += productA.revenue
    totalCommision += productA.commision
    timesClicked += 1
    console.log(totalSales, totalRevenue, totalCommision, timesClicked) // check
    checkAchievements()
    renderSales()
}

function salesB() {
    // console.log(`product B ${productB.emoji}`) // check
    totalSales += productB.emoji
    totalRevenue += productB.revenue
    totalCommision += productB.commision
    timesClicked += 1
    console.log(totalSales, totalRevenue, totalCommision, timesClicked) // check
    checkAchievements()
    renderSales()
}

// show stuff in separate function for clarity
function renderSales() {
    salesHeader.textContent = `Live Sales - ${timesClicked}`
    salesBar.textContent = totalSales
    achievementsHeader.textContent = `Live Achievements - ${achievementsUnlocked}`
    achievementsBar.textContent = achievementsBadge
    revenueBar.textContent = totalRevenue
    commisionBar.textContent = totalCommision
}



// Achievements
// The achievements are given on three occasions:
// 1. With first sale (when timesClicked === 1)
// 2. When revenue reaches $2500 (when totalRevenue >= 2500) - beware: this should ONLY happen once only when this goal is reached. Boolean to set?
// 3. With the 15th sale (when timesClicked === 15)
// First and third goal are easy, second goal has more to it.
// I like to make this happen with just one variable but in first iteration I'll use a boolean which switches when goal is met
function checkAchievements() {
    if (timesClicked === 1) {
        achievementsUnlocked += 1
        achievementsBadge += '🔔'
        console.log(achievementsBadge) // check
    } else if (totalRevenue >= 2500 && achievementsBadgeTwo === false) {
        achievementsUnlocked += 1
        achievementsBadge += '💰'
        achievementsBadgeTwo = true
        console.log(achievementsBadgeTwo) // check
        console.log(achievementsBadge) // check
    } else if (timesClicked === 15) {
        achievementsUnlocked += 1
        achievementsBadge += '🏆'
        console.log(achievementsBadge) // check
    }
    return achievementsBadge // is this needed? it also works without return...
}