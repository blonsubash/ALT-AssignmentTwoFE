var spinnerWrapper = document.querySelector(".spinner-border");
var container = document.getElementById("itemDetails");
productLists = [];
var productID =
  window.location.search.split("=")[
    window.location.search.split("=").length - 1
  ];

axios.get(`https://fakestoreapi.com/products/${productID}`).then((response) => {
  itemDetails(response.data);
  spinnerWrapper.style.display = "none";
});

function itemDetails(data) {
  console.log("data", data);
  productLists.push(data);
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

  console.log("Data", productLists);
}

// function productDetails(detailData) {
//   productLists.push(detailData);
//   console.log(productLists);
// }
