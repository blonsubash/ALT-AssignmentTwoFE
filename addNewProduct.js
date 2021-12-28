var productID =
  window.location.search.split("=")[
    window.location.search.split("=").length - 1
  ];
if (productID) {
  axios
    .get(`https://fakestoreapi.com/products/${productID}`)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        editSelectedProduct(response.data);
      }
    });
}

function editSelectedProduct(data) {
  document.getElementById("homepage-heading").innerHTML = "Update Product";
  document.getElementById("newItemName").value = data.title;
  document.getElementById("newItemPrice").value = data.price;
  document.getElementById("newItemDescription").value = data.description;
  document.getElementById("newItemImage").value = data.image;
  document.getElementById("selection").value = data.category;
  document.getElementById("addNewItemBtn").innerHTML = "Update Item";
  document
    .getElementById("addNewItemBtn")
    .addEventListener("click", addNewProduct);
}

function addNewProduct(e) {
  e.preventDefault();
  var newProductName = document.getElementById("newItemName").value;
  var newProductPrice = document.getElementById("newItemPrice").value;
  var newProductDescription =
    document.getElementById("newItemDescription").value;
  var newProductImage = document.getElementById("newItemImage").value;
  var newProductCategory = document.getElementById("selection").value;

  function checkProductName() {
    if (newProductName === "") {
      document.getElementById("newNameError").innerHTML =
        "Product name is empty";
      document.getElementById("newItemName").style.borderColor = "red";
    } else {
      return true;
    }
  }
  function checkProductPrice() {
    if (newProductPrice === "") {
      document.getElementById("newPriceError").innerHTML = "Price is empty";
      document.getElementById("newItemPrice").style.borderColor = "red";
    } else {
      return true;
    }
  }
  function checkProductDescription() {
    if (newProductDescription === "") {
      document.getElementById("newDescriptionError").innerHTML =
        "Product Description is empty";
      document.getElementById("newItemDescription").style.borderColor = "red";
    } else {
      return true;
    }
  }
  function checkProductImage() {
    if (newProductImage === "") {
      document.getElementById("newImageError").innerHTML =
        "Product Image is empty";
      document.getElementById("newItemImage").style.borderColor = "red";
    } else {
      return true;
    }
  }
  function checkProductCategory() {
    if (newProductCategory === "selectCategory") {
      document.getElementById("newSelectionError").innerHTML =
        "Please select a category";
      document.getElementById("selection").style.borderColor = "red";
    } else {
      return true;
    }
  }

  function handleSuccess() {
    document.getElementById("newItemName").value = "";
    document.getElementById("newItemPrice").value = "";
    document.getElementById("newItemDescription").value = "";
    document.getElementById("newItemImage").value = "";
    document.getElementById("selection").value = "selectCategory";
    document.getElementById("newNameError").innerHTML = "";
    document.getElementById("newPriceError").innerHTML = "";
    document.getElementById("newDescriptionError").innerHTML = "";
    document.getElementById("newImageError").innerHTML = "";
    document.getElementById("newSelectionError").innerHTML = "";
    document.getElementById("newItemName").style.borderColor = "#e6e6e6";
    document.getElementById("newItemPrice").style.borderColor = "#e6e6e6";
    document.getElementById("newItemDescription").style.borderColor = "#e6e6e6";
    document.getElementById("newItemImage").style.borderColor = "#e6e6e6";
    document.getElementById("selection").style.borderColor = "#e6e6e6";
    document.getElementById("dataUploadedPopup").style.display = "block";
    if (productID) {
      document.getElementById("addNewItemBtn").innerHTML = "Update Item";
      document.getElementById("successPopup").innerHTML =
        "The Product has been updated";
    } else {
      document.getElementById("addNewItemBtn").innerHTML = "Add Item";
    }
    document.getElementById("confirmBtn").style.cursor = "pointer";
  }

  function handlePopupClose() {
    document
      .getElementById("confirmBtn")
      .addEventListener("click", function () {
        window.location.href = "homepage1.html";
        document.getElementById("dataUploadedPopup").style.display = "none";
      });
  }
  function handleProcessingTime() {
    document.getElementById("newItemName").style.cursor = "not-allowed";
    document.getElementById("addNewItemBtn").style.cursor = "not-allowed";
    document.getElementById("newItemPrice").style.cursor = "not-allowed";
    document.getElementById("newItemDescription").style.cursor = "not-allowed";
    document.getElementById("newItemImage").style.cursor = "not-allowed";
    document.getElementById("selection").style.cursor = "not-allowed";
    document.getElementById("addNewItemBtn").innerHTML =
      "Processing Please Wait...";
  }
  var checkProductNameResult = checkProductName();
  var checkProductPriceResult = checkProductPrice();
  var checkProductDescriptionResult = checkProductDescription();
  var checkProductImageResult = checkProductImage();
  var checkProductCategoryResult = checkProductCategory();

  if (
    checkProductNameResult &&
    checkProductPriceResult &&
    checkProductDescriptionResult &&
    checkProductImageResult &&
    checkProductCategoryResult
  ) {
    handleProcessingTime();
    var formData = {};
    formData.title = `${newProductName}`;
    formData.price = `${newProductPrice}`;
    formData.description = `${newProductDescription}`;
    formData.image = `${newProductImage}`;
    formData.category = `${newProductCategory}`;

    if (productID) {
      axios
        .put(`https://fakestoreapi.com/products/${productID}`, formData)
        .then((res) => {
          if (res.status === 200) {
            console.log("Data edited succssfully");
            handleSuccess();
            handlePopupClose();
          }
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .post("https://fakestoreapi.com/products", formData)
        .then((res) => {
          if (res.status === 200) {
            console.log("New Item Added Successfully");
            handleSuccess();
            handlePopupClose();
          }
        })
        .catch((err) => console.error(err));
    }
  }
}

document
  .getElementById("addNewItemBtn")
  .addEventListener("click", addNewProduct);
