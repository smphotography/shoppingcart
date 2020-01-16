/*
// import json
function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

// this requests the file and executes a callback with the parsed result once
//   it is available
fetchJSONFile('pathToFile.json', function(data){
    // do something with your data
    console.log(data);
});*/

/*

// cart manipulation

*/
// Variables from DOM


var gridContainer = document.getElementsByClassName("w3-half")[0];
var cartContainer = document.getElementsByClassName("cartContainer")[0];
for (var i = 0; i < 3; i++) {
  if (localStorage.getItem([i]) !== null) {
    let parsedItem =  JSON.parse(localStorage.getItem([i]));
    var productsFromLocal = `<div class="w3-col l3 s6">
            <div class="w3-container">
              <img src="${parsedItem.image}" style="width:100%">
              <p style="color: black;width:100%">${parsedItem.title}<br><b style="color: black;width:100%">${parsedItem.price}</b></p>
              <p style="color: black;width:100%">${parsedItem.description}</p>
            </div>
          </div>`;
    cartContainer.innerHTML += productsFromLocal;
  }
}




// json for displaying the products

var data = {
  "ids": {
    0: { "title": "omg so amazing omgggg", "image": "https://picsum.photos/1000", "price" : 100, "description" : "omg is right"  },
    1: { "title": "This is an amamazning product", "image": "https://picsum.photos/1000", "price" : 100, "description" : "omg is right" },
    2: { "title": "you crazy hoe", "image": "https://picsum.photos/1000", "price" : 100, "description" : "omg is right" }
  }
};

// display products
(function() {
  var id;
  var idsInArray;
  var i;
  var size = Object.keys(data).length;

  for (id in data.ids) {
    idsInArray = data.ids[id];
    console.log(data.ids[id].title);

      var productsFromJson = `<div class="w3-col l3 s6">
              <div class="w3-container">
                <img src="${data.ids[id].image}" style="width:100%">
                <p>${data.ids[id].title}<br><b>${data.ids[id].price}</b></p>
                <button onclick="addToCart(${[id]})">ADD TO CART</button>
                <p>${data.ids[id].description}</p>
              </div>
            </div>`;

      gridContainer.innerHTML += productsFromJson;


  }
})();
function addToCart(idofproduct) {
  let pulledData = data.ids[idofproduct];
  console.log(pulledData);
  let itemStringified = JSON.stringify(pulledData);
  console.log(itemStringified);
  let id = idofproduct;
  console.log(id);
  localStorage.setItem(id, itemStringified);
  updateCart(id);
}

// cart update
function updateCart(id) {
  console.log(id);
  let getLocalStorage = localStorage.getItem(id);
  console.log(getLocalStorage);
  let parsedItem = JSON.parse(getLocalStorage);
  console.log(parsedItem);
  console.log(parsedItem.length);
  console.log(Object.keys(parsedItem).length);
  console.log(parsedItem.title);

    var productsFromLocal = `<div class="w3-col l3 s6">
            <div class="w3-container">
              <img src="${parsedItem.image}" style="width:100%">
              <p style="color: black;width:100%">${parsedItem.title}<br><b style="color: black;width:100%">${parsedItem.price}</b></p>
              <p style="color: black;width:100%">${parsedItem.description}</p>
            </div>
          </div>`;
    cartContainer.innerHTML += productsFromLocal;
  }
  /*
for (var i = 0; i < Object.keys(parsedItem).length; i++) {
    console.log(parsedItem[i]);
    console.log(parsedItem[i].image);
    var productsFromLocal = `<div class="w3-col l3 s6">
            <div class="w3-container">
              <img src="${parsedItem[i].image}" style="width:100%">
              <p>${parsedItem[i].title}<br><b>${parsedItem[i].price}</b></p>
              <p>${parsedItem[i].description}</p>
            </div>
          </div>`;
    cartContainer.innerHTML += productsFromLocal;
  }*/
