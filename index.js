// Product A info
let productA = {
  emoji: "⭐",
  revenue: 200,
  commision: 50,
};

// Product B info
let productB = {
  emoji: "🔥",
  revenue: 300,
  commision: 75,
};

const starProductBtn = document.getElementById("star-product");
const fireProductBtn = document.getElementById("fire-product");
const soldProducts = document.getElementById("sold-products");
const achievements = document.getElementById("achievements");

const revenueArr = [];

function handleClick() {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    switch (e.target.dataset.product) {
      case "star":
        soldProducts.innerHTML += productA.emoji;
        updateRevenueArr(productA.revenue);
        break;
      case "fire":
        soldProducts.innerHTML += productB.emoji;
        updateRevenueArr(productB.revenue);
        break;
      default:
        break;
    }
    addBellIconOnProductBtnClick();
    updateHtmlForTotalRevenue();
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
  document.getElementById("total-revenue").textContent =
    calculateTotalRevenue();
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
