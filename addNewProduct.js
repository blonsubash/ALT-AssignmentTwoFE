console.log("Hello");

function addNewProduct(e) {
  e.preventDefault();
  var newProductName = document.getElementById("newItemName").value;
  var newProductPrice = document.getElementById("newItemPrice").value;
  var newProductDescription =
    document.getElementById("newItemDescription").value;
  var newProductImage = document.getElementById("newItemImage").value;
  var newProductCategory = document.getElementById("selection").value;

  console.log("name", newProductName);
  console.log("price", newProductPrice);
  console.log("detail", newProductDescription);
  console.log("img", newProductImage);
  console.log("category", newProductCategory);
  axios
    .post(
      "https://fakestoreapi.com/products",

      {
        title: `${newProductName}`,
        price: `${newProductPrice}`,
        description: `${newProductDescription}`,
        image: `${newProductImage}`,
        category: `${newProductCategory}`,
      }
    )
    .then((res) => {
      if (res.status === 200) {
        console.log("New Item Added Successfully");
        // window.location.href = "homepage1.html";
      }
    })
    .catch((err) => console.error(err));
}

document
  .getElementById("addNewItemBtn")
  .addEventListener("click", addNewProduct);
