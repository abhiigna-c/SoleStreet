const buttons = document.querySelectorAll(".category-filter button,.filter-box a[data-filter], .filter-box a[brand-category]");
const products = document.querySelectorAll(".product-card");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const category = button.textContent.toLowerCase();
    products.forEach(function(product) {
      if (category === "all") {
        product.style.display = "block";
      }
      else if (product.dataset.category.includes(category)) {
        product.style.display = "block";
      }
      else {
        product.style.display = "none";
      }

    });

  });

});

