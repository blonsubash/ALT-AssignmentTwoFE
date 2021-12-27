var spinnerWrapper = document.querySelector(".spinner-border");
var container = document.getElementById("itemDetails");
var similarContainer = document.getElementById("similarProducts");
var similarHeader = document.getElementById("similarProductsHeader");
similarHeader.style.display = "none";
var productID =
  window.location.search.split("=")[
    window.location.search.split("=").length - 1
  ];
console.log("Product Id", productID);

axios.get(`https://fakestoreapi.com/products/${productID}`).then((response) => {
  if (response.status === 200) {
    itemDetails(response.data);
    if (response.data.category) {
      fetchSimilarCategoryData(response.data.category);
    }
  }
  spinnerWrapper.style.display = "none";
});

function itemDetails(data) {
  console.log("Selected Data", data);

  var row = `<div class="itemDetails" ><img class="itemDetailsImg" src="${data.image}"/></div>
                <div class="itemallDetails"><p id="titleDetails">${data.title}</p>
                <p id="descriptionDetails"> ${data.description}</p>
                <p id="priceDetails"> $ ${data.price}</p>
               <div id="formContainer" <form>
                <input id="addItem"value="0">
                 <img id="minusSign" src="./Images/minusSign.png">
                <img id="plusSign" src="./Images/plusSign.png">
                </form></div>
                <button id="cartBtn"> Add to cart</button>
                </div>`;
  container.innerHTML += row;
}

function fetchSimilarCategoryData(categoryName) {
  axios
    .get(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((response) => {
      similarProductsSection(response.data);
    });
}
function similarProductsSection(data) {
  console.log("data", data);

  data
    .filter((item) => item.id != productID)
    .map((prouctItem) => {
      similarHeader.style.display = "block";
      similarHeader.innerHTML = "Similar Products";
      var section = `
    <div class="productItem col-md-3" ><a href='http://127.0.0.1:5500/productDetails.html?id=${
      prouctItem.id
    }'><div id="imageContainer"><img class="productImage" src="${
        prouctItem.image
      }"/></div>
                <p id="titleContainer">${
                  prouctItem.title.length > 17
                    ? ` ${prouctItem.title.substring(0, 17)}...`
                    : prouctItem.title
                }</p>
                  <p id="priceContainer"> $ ${prouctItem.price}</p></a>
                  </div>`;
      return (similarContainer.innerHTML += section);
    });

  // for (var i = 0; i < data.length; i++) {
  //   console.log(productID);
  //   console.log(data[i].id);
  //   if (productID == data[i].id) {
  //     console.log("same id", data[i]);
  //     filterID = productID;
  //   } else {
  //     console.log("other id", data[i]);
  //   }
  // }
}

// function productDetails(detailData) {
//   productLists.push(detailData);
//   console.log(productLists);
// }
