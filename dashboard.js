var productLists = [];
var spinnerWrapper = document.querySelector(".spinner-border");
var container = document.getElementById("productContainer");

axios.get("https://fakestoreapi.com/products").then((response) => {
  myProductList(response.data);
  spinnerWrapper.style.display = "none";
});
function addNewProduct() {
  window.location.href = "addNewProduct.html";
}
function myProductList(data) {
  for (var i = 0; i < data.length; i++) {
    productLists.push(data[i]);

    var row = `<div class="productItem col-md-3" ><a href='http://127.0.0.1:5500/productDetails.html?id=${
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
  console.log("Data", productLists);
}

function selectCategory() {
  if (this.value == "mensclothing") {
    productLists = [];
    container.innerHTML = "";
    spinnerWrapper.style.display = "block";

    axios
      .get(`https://fakestoreapi.com/products/category/men's clothing`)
      .then((response) => {
        myProductList(response.data);
        spinnerWrapper.style.display = "none";
      });
  }
  if (this.value == "jewerly") {
    productLists = [];
    container.innerHTML = "";
    spinnerWrapper.style.display = "block";
    axios
      .get(`https://fakestoreapi.com/products/category/jewelery`)
      .then((response) => {
        myProductList(response.data);
        spinnerWrapper.style.display = "none";
      });
  }
  if (this.value == "electronics") {
    productLists = [];
    container.innerHTML = "";
    spinnerWrapper.style.display = "block";
    axios
      .get(`https://fakestoreapi.com/products/category/electronics`)
      .then((response) => {
        myProductList(response.data);
        spinnerWrapper.style.display = "none";
      });
  }
  if (this.value == "womensclothing") {
    productLists = [];
    container.innerHTML = "";
    spinnerWrapper.style.display = "block";
    axios
      .get(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((response) => {
        myProductList(response.data);
        spinnerWrapper.style.display = "none";
      });
  }
  if (this.value == "allcategories") {
    productLists = [];
    container.innerHTML = "";
    spinnerWrapper.style.display = "block";
    axios.get(`https://fakestoreapi.com/products`).then((response) => {
      myProductList(response.data);
      spinnerWrapper.style.display = "none";
    });
  }
}
document.getElementById("selection").addEventListener("change", selectCategory);

document
  .getElementById("addNewProductBtn")
  .addEventListener("click", addNewProduct);

// function searchMyProductLists(searchString) {
//   let searchResult = productLists.filter(function (item, index) {
//     return (
//       item.id === searchString ||
//       item.title === searchString ||
//       item.price === searchString ||
//       item.category === searchString ||
//       item.description === searchString
//     );
//   });
//   return searchResult;
// }

// document
//   .getElementById("searchProductListsBtn")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     const searchResult = document.getElementById("searchText").value;
//     console.log(searchResult);
//     let finalResult = searchMyProductLists(searchResult);
//     if (finalResult.length > 0) {
//       console.log("FInal result", finalResult);
//       productLists = [];
//       table.innerHTML = "";
//       myProductList(finalResult);
//     } else {
//       alert("No data found");
//     }
//   });
