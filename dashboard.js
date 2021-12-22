axios.get("https://fakestoreapi.com/products").then((response) => {
  myProductList(response.data);
});

function myProductList(data) {
  var table = document.getElementById("productListTable");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].category}</td>
                    <td>${data[i].description}</td>
                    <td><img class="productImage" src="${data[i].image}"/></td>
        </tr>`;
    table.innerHTML += row;
  }
}
// let spinnerWrapper = document.querySelector(".spinner-border");
// window.addEventListener("load", function () {
//   spinnerWrapper.style.display = "none";
// });
