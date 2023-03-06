// Salesboard App

let totalSales = []
let timesClicked = 0
// Product A info
let productA = {
    emoji: "⭐",
    revenue: 200,
    commision: 50
}

// Product B info
let productB = {
    emoji: "🔥",
    revenue: 300,
    commision: 75
}

// Setup

// Some interaction: the sales buttons
const paBtn = document.getElementById('btn-productA');
const pbBtn = document.getElementById('btn-productB');
// Show the correct emoji on those sales buttons
paBtn.textContent = productA.emoji;
pbBtn.textContent = productB.emoji;
// Let them listen for clicks & when they're hit fire a sales function
paBtn.addEventListener('click', function () { salesA() });
pbBtn.addEventListener('click', function () { salesB() });

// Showing the sales results in the HTML
const salesBar = document.getElementById('sales-bar');
const achievementsBar = document.getElementById('achievements-bar');
// initally they're empty (need to refactor this when we're using local storage)
salesBar.textContent = achievementsBar.textContent = '';



// Ready, set... GO

// Clicking the sales buttons will:
// 1. update totalSales array with sales
// 2. update "Live Sales" in the HTML with the content of the totalSales array
// 3. update "Live Sales" with times either of the two buttons is clicked
function salesA() {
    // console.log(`product A ${productA.emoji}`); // check
    totalSales += productA.emoji;
    timesClicked += 1;
    console.log(totalSales, timesClicked) // check
    salesBar.textContent = `${totalSales} – ${timesClicked}`;
};

function salesB() {
    // console.log(`product B ${productB.emoji}`); // check
    totalSales += productB.emoji;
    timesClicked += 1;
    console.log(totalSales, timesClicked) // check
    salesBar.textContent = `${totalSales} – ${timesClicked}`;
};