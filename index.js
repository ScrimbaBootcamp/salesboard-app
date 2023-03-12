const starProductBtn = document.getElementById("star-product");
const fireProductBtn = document.getElementById("fire-product");
const soldProducts = document.getElementById("sold-products");

function handleClick() {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    switch (e.target.dataset.product) {
      case "star":
        soldProducts.innerHTML += "⭐";
        break;
      case "fire":
        soldProducts.innerHTML += "🔥";
        break;
      default:
        break;
    }
  });
}

handleClick();
