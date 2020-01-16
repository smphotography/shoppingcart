// Variables from DOM

var gridContainer = document.getElementsByClassName("w3-half")[0];
var cartContainer = document.getElementsByClassName("cartContainer");

// json for displaying the products
var data = [
  {
    image: "https://picsum.photos/300",
    title: "HELLO WORLD",
    price: 100,
    description: "The most awesome product ever omg",
    id: 1
  },
  {
    image: "https://picsum.photos/300",
    title: "HELLO WORLD",
    price: 100,
    description: "The most awesome product ever omg",
    id: 2
  },
  {
    image: "https://picsum.photos/300",
    title: "HELLO WORLD",
    price: 100,
    description: "The most awesome product ever omg",
    id: 3
  }
];

// display products
function productDisplay(arr) {
  var i;
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    var productsFromJson = `<div class="w3-col l3 s6">
            <div class="w3-container">
              <img src="${arr[i].image}" style="width:100%">
              <p>${arr[i].title}<br><b>${arr[i].price}</b></p>
              <button onclick="addToCart(${arr[i]},${arr[i].id})">ADD TO CART</button>
              <p>${arr[i].description}</p>
            </div>
          </div>`;

    gridContainer.innerHTML += productsFromJson;
  }
}
productDisplay(data);

// cart manipulation
function addToCart(product, id) {
  let itemStringified = JSON.stringify(product);
  let idStringified = id;
  localStorage.setItem(id, itemStringified);
  updateCart(id)
}
// cart update
function updateCart(id) {
  console.log(id);
  let getLocalStorage = localStorage.getItem(id)
  let parsedItem = JSON.parse(getLocalStorage)
  var i;
  for (var i = 0; i < parsedItem.length; i++) {
    var productsFromLocal = `<div class="w3-col l3 s6">
            <div class="w3-container">
              <img src="${parsedItem[i].image}" style="width:100%">
              <p>${parsedItem[i].title}<br><b>${parsedItem[i].price}</b></p>
              <p>${parsedItem[i].description}</p>
            </div>
          </div>`;
          cartContainer.innerHTML += productsFromLocal;
  }
}
