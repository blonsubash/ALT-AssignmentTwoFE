var productLists = [];
var spinnerWrapper = document.querySelector(".spinner-border");
var container = document.getElementById("productContainer");

function fetchProductsList() {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    myProductList(response.data);
    spinnerWrapper.style.display = "none";
  });
}

function fetchProductsByCategory(e) {
  console.log(e);
  productLists = [];
  container.innerHTML = "";
  spinnerWrapper.style.display = "block";
  axios
    .get(`https://fakestoreapi.com/products/category/${e.target.value}`)
    .then((response) => {
      myProductList(response.data);
      spinnerWrapper.style.display = "none";
    });
}

fetchProductsList();

function addNewProduct() {
  window.location.href = "addNewProduct.html";
}
function myProductList(data) {
  for (var i = 0; i < data.length; i++) {
    productLists.push(data[i]);

    var row = `<div class="productItem col-md-3 col-sm-12" ><a href='http://127.0.0.1:5500/productDetails.html?id=${
      data[i].id
    }'><div id="imageContainer"><img class="productImage" src="${
      data[i].image
    }"/></div>
        <p id="titleContainer">${
          data[i].title.length > 17
            ? ` ${data[i].title.substring(0, 17)}...`
            : data[i].title
        }</p>
          <p id="priceContainer"> $ ${data[i].price}</p></a>
          </div>`;
    container.innerHTML += row;
  }
}

function logoutPopup() {
  switch (document.getElementById("logoutPopup").style.display) {
    case "":
      document.getElementById("logoutPopup").style.display = "block";
    case "none":
      document.getElementById("logoutPopup").style.display = "block";
      break;
    case "block":
      document.getElementById("logoutPopup").style.display = "none";
      break;
    default:
      document.getElementById("logoutPopup").style.display = "none";
  }
  document.getElementById("logoutBtn").addEventListener("click", function () {
    window.location.href = "loginpage.html";
  });
}
document.getElementById("selection").addEventListener("change", function (e) {
  fetchProductsByCategory(e);
});

document
  .getElementById("addNewProductBtn")
  .addEventListener("click", addNewProduct);

document.getElementById("navBarProfile").addEventListener("click", logoutPopup);

document.getElementById("homeLink").addEventListener("click", function () {
  window.location.href = "homepage1.html";
});

document.getElementById("fbIcon").addEventListener("click", function () {
  window.open("https://www.facebook.com/", "_blank");
});
document.getElementById("instaIcon").addEventListener("click", function () {
  window.open("https://www.instagram.com/", "_blank");
});
document.getElementById("tiktokIcon").addEventListener("click", function () {
  window.open("https://www.tiktok.com/", "_blank");
});
//Mobile VIew//

document.getElementById("mobOptionsIcon").addEventListener("click", mobNavBar);
function mobNavBar() {
  switch (document.getElementById("mobViewNavBar").style.display) {
    case "":
      document.getElementById("mobViewNavBar").style.display = "block";
    case "none":
      document.getElementById("mobViewNavBar").style.display = "block";
      break;
    case "block":
      document.getElementById("mobViewNavBar").style.display = "none";
      break;
    default:
      document.getElementById("mobViewNavBar").style.display = "none";
  }
}

document.getElementById("mobHome").addEventListener("click", function () {
  window.location.href = "homepage1.html";
});

document
  .getElementById("mobAddNewProduct")
  .addEventListener("click", function () {
    window.location.href = "addNewProduct.html";
  });

document.getElementById("mobLogout").addEventListener("click", function () {
  window.location.href = "loginpage.html";
});
