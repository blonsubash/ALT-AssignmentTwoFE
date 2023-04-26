var spinnerWrapper = document.querySelector(".spinner-border");
var container = document.getElementById("itemDetails");
var similarContainer = document.getElementById("similarProducts");
var similarHeader = document.getElementById("similarProductsHeader");
similarHeader.style.display = "none";
var productID =
  window.location.search.split("=")[
    window.location.search.split("=").length - 1
  ];

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
  var row = `<div class="itemDetails" ><img class="itemDetailsImg" src="${data.image}"/></div>
                <div class="itemallDetails"> <img id="optionBtn" onclick="optionBtn()" src="./Images/optionBtn.png">
                <div id="optionSection">
                 <button id="updateBtn" onclick="updateItem()"> Update Item</button>
                 <button id="deleteBtn" onclick="deleteItem()"> Delete Item</button>
                </div>
                <p id="titleDetails">${data.title}</p>
               
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
function optionBtn() {
  switch (document.getElementById("optionSection").style.display) {
    case "":
      document.getElementById("optionSection").style.display = "block";
    case "none":
      document.getElementById("optionSection").style.display = "block";
      break;
    case "block":
      document.getElementById("optionSection").style.display = "none";
      break;
    default:
      document.getElementById("optionSection").style.display = "none";
  }
}
function updateItem() {
  window.location.href = ` addNewProduct.html?id=${productID}`;
}
function deleteItem() {
  document.getElementById("deleteConfirmation").style.display = "block";
  document.getElementById("optionSection").style.display = "none";
  document
    .getElementById("yesBtn")
    .addEventListener("click", deleteSuccessfully);
  document
    .getElementById("noBtn")
    .addEventListener("click", cancelDeleteProduct);
}
function deleteSuccessfully() {
  document.getElementById("confirmationSpan").innerHTML =
    "Deleting, Please Wait...";
  document.getElementById("yesBtn").style.cursor = "not-allowed";
  document.getElementById("noBtn").style.cursor = "not-allowed";

  axios
    .delete(`https://fakestoreapi.com/products/${productID}`)
    .then((response) => {
      console.log("Data Deleted", response.data);

      document.getElementById("deleteConfirmation").style.display = "none";
      document.getElementById("deleteSuccess").style.display = "block";
      document
        .getElementById("confirmBtn")
        .addEventListener("click", function () {
          window.location.href = "homepage1.html";
        });
    });
}
function cancelDeleteProduct() {
  document.getElementById("deleteConfirmation").style.display = "none";
}

function fetchSimilarCategoryData(categoryName) {
  axios
    .get(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((response) => {
      similarProductsSection(response.data);
    });
}
function similarProductsSection(data) {
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
}
