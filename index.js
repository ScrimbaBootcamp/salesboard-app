// Product A info
let productA = {
  emoji: "⭐",
  revenue: 200,
  commission: 50,
};

// Product B info
let productB = {
  emoji: "🔥",
  revenue: 300,
  commission: 75,
};

const starProductBtn = document.getElementById("star-product");
const fireProductBtn = document.getElementById("fire-product");
const soldProducts = document.getElementById("sold-products");
const achievements = document.getElementById("achievements");

const revenueArr = [];
const commissionArr = [];

function handleClick() {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    switch (e.target.dataset.product) {
      case "star":
        soldProducts.innerHTML += productA.emoji;
        updateRevenueArr(productA.revenue);
        updatecommissionArr(productA.commission);
        break;
      case "fire":
        soldProducts.innerHTML += productB.emoji;
        updateRevenueArr(productB.revenue);
        updatecommissionArr(productB.commission);
        break;
      default:
        break;
    }
    addBellIconOnProductBtnClick();
    updateHtmlForTotalRevenue();
    updateHtmlForTotalCommission();
  });
}

handleClick();

function addBellIconOnProductBtnClick() {
  if (
    soldProducts.innerHTML === productA.emoji ||
    soldProducts.innerHTML === productB.emoji
  ) {
    achievements.innerHTML = "🔔";
  }
}

function updateHtmlForTotalRevenue() {
  document.getElementById(
    "total-revenue"
  ).textContent = `$ ${calculateTotalRevenue()}`;
}

function calculateTotalRevenue() {
  return revenueArr.reduce(
    (totalRevenue, revenue) => totalRevenue + revenue,
    0
  );
}

function updateRevenueArr(revenue) {
  revenueArr.push(revenue);
}

function updateHtmlForTotalCommission() {
  document.getElementById(
    "total-commission"
  ).textContent = `$ ${calculateTotalCommission()}`;
}

function calculateTotalCommission() {
  return commissionArr.reduce(
    (totalCommission, commission) => totalCommission + commission,
    0
  );
}

function updatecommissionArr(commission) {
  commissionArr.push(commission);
}
