// Variables from DOM

var gridContainer = document.getElementsByClassName("w3-grayscale")[0];
var cartContainer = document.getElementsByClassName("cartContainer");

// Methods

// set variable data for global use

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
var newData = JSON.stringify(data);

localStorage.setItem("shoppingCartJSON", newData);

var newnewData = JSON.parse(newData);

function addToCart(id, value) {
  let tobestringed = value;
  let stringified = JSON.stringify(value);
  localStorage.setItem(id, value);
  console.log(localStorage.getItem(id));
}

function loopProducts(arr) {
  var i;
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    var objectProduct = JSON.stringify(arr[i]);
    var idProduct = arr[i].id;

    var productsFromJson = `<div class="w3-col l3 s6">
            <div class="w3-container">
              <img src="${arr[i].image}" style="width:100%">
              <p>${arr[i].title}<br><b>${arr[i].price}</b></p>
              <button onclick="addToCart(${idProduct} , ${objectProduct})">ADD TO CART</button>
              <p>${arr[i].description}</p>
            </div>
          </div>`;

    gridContainer.innerHTML += productsFromJson;
  }
}
loopProducts(data);
