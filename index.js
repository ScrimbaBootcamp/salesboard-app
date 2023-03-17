// Salesboard App
let totalSales = ''
let timesClicked = 0
let achievementsUnlocked = 0
let achievementsBadge = ''
let achievementsBadgeTwo = false
let totalRevenue = 0
let totalCommission = 0
let productA = {
    emoji: "⭐",
    revenue: 200,
    commission: 50
}
let productB = {
    emoji: "🔥",
    revenue: 300,
    commission: 75
}

// Light and dark mode switch
const toggleBtn = document.querySelector('.toggle-mode')
toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('light')
    toggleBtn.classList.toggle('fa-moon')
    toggleBtn.classList.toggle('fa-sun')
})

// Setup
// The sales buttons
const paBtn = document.getElementById('btn-productA')
const pbBtn = document.getElementById('btn-productB')
// Show the correct emoji on those sales buttons
paBtn.textContent = productA.emoji
pbBtn.textContent = productB.emoji
// Let them listen for clicks & when they're hit fire a sales function
paBtn.addEventListener('click', function () { fixSale(productA) })
pbBtn.addEventListener('click', function () { fixSale(productB) })

// Showing the sales results in the HTML
const salesHeader = document.getElementById('sales-header')
const salesBar = document.getElementById('sales-bar')
const achievementsHeader = document.getElementById('achievements-header')
const achievementsBar = document.getElementById('achievements-bar')
// initally they're empty (need to refactor this when we're using local storage)
salesBar.textContent = achievementsBar.textContent = ''

// Showing the revenue and commission in the HTML
const revenueBar = document.getElementById('revenue-bar')
const commissionBar = document.getElementById('commission-bar')

renderSales()

// Sales button actions
function fixSale(salesProduct) {
    totalSales += salesProduct.emoji
    totalRevenue += salesProduct.revenue
    totalCommission += salesProduct.commission
    timesClicked += 1
    checkAchievements()
    renderSales()
}

// Show sales
function renderSales() {
    salesHeader.textContent = `Live Sales - ${timesClicked}`
    salesBar.textContent = totalSales
    achievementsHeader.textContent = `Live Achievements - ${achievementsUnlocked}`
    achievementsBar.textContent = achievementsBadge
    revenueBar.textContent = `$ ${totalRevenue}`
    commissionBar.textContent = `$ ${totalCommission}`
}

// Achievements logic
function checkAchievements() {
    if (timesClicked === 1) {
        achievementsUnlocked += 1
        achievementsBadge += '🔔'
    } else if (totalRevenue >= 2500 && achievementsBadgeTwo === false) {
        achievementsUnlocked += 1
        achievementsBadge += '💰'
        achievementsBadgeTwo = true
    } else if (timesClicked === 15) {
        achievementsUnlocked += 1
        achievementsBadge += '🏆'
    }
}