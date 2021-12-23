var productLists = [];
var spinnerWrapper = document.querySelector(".spinner-border");
var table = document.getElementById("productListTable");

axios.get("https://fakestoreapi.com/products").then((response) => {
  myProductList(response.data);
  spinnerWrapper.style.display = "none";
});
function myProductList(data) {
  for (var i = 0; i < data.length; i++) {
    productLists.push(data[i]);

    var row = `<tr>
                 <td><a href="#"><img class="productImage" src="${data[i].image}"/></a></td>   
                 <td>${data[i].title}</td>
                  <td>${data[i].description}</td>
                   <td>${data[i].category}</td>
                  <td>${data[i].price}</td>
                </tr>`;
    table.innerHTML += row;
  }
  console.log("Data", productLists);
}

function selectCategory() {
  if (this.value == "mensclothing") {
    productLists = [];
    table.innerHTML = "";
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
    table.innerHTML = "";
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
    table.innerHTML = "";
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
    table.innerHTML = "";
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
    table.innerHTML = "";
    spinnerWrapper.style.display = "block";
    axios.get(`https://fakestoreapi.com/products`).then((response) => {
      myProductList(response.data);
      spinnerWrapper.style.display = "none";
    });
  }
}
document.getElementById("selection").addEventListener("change", selectCategory);

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
