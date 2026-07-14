const products = [
  { id: 1, name: "Laptop Lenovo", price: 2500000, category: "Tecnología" },
  { id: 2, name: "Mouse inalámbrico", price: 85000, category: "Tecnología" },
  { id: 3, name: "Silla ergonómica", price: 420000, category: "Hogar" },
  { id: 4, name: "Escritorio", price: 680000, category: "Hogar" }
];

function calculateDiscount(price, userType) {
  if (userType == "premium") {
    return price * 0.9;
  } else {
    return price;
  }
}

function searchProducts() {
  const query = document.getElementById("search").value;
  let html = "";

  for-of  (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
      html += "<div class='product'>" +
        "<h3>" + products[i].name + "</h3>" +
        "<p>Precio: $" + calculateDiscount(products[i].price, "premium") + "</p>" +
        "<p>Categoría: " + products[i].category + "</p>" +
        "</div>";
    
    console.log}
  }

  document.getElementById("results").innerHTML = html;
}

function debugMode() {
  console.log("Debug activado");
}

debugMode();



