// import json
/*
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
fetchJSONFile('json/items.json', function(data){
    // do something with your data
    var keys = Object.keys(data);
    console.log(keys);
    for (var i = 0; i < keys.length; i++) {
   var value = data[key];
   console.log(value);
   // your code here...
}
    console.log(data);
    console.log(newdata);
    return newdata;
});
*/
/*
Since myJSONObject.abc contains a list of products it would make more sense to define the property abc as an array. Like this:

var myJSONObject =
{
"abc":
    [
        [
            {"prod_ver" : "prod 1 ver 1"},
            {"prod_ver" : "prod 1 ver 2"},
        ],
        [
            {"prod_ver" : "prod 2 ver 1"},
            {"prod_ver" : "prod 2 ver 2"},
        ],
        [
            {"prod_ver" : "prod 3 ver 1"},
            {"prod_ver" : "prod 3 ver 2"},
        ]
    ]
};
Then you can iterate over the products and their versions using normal loops:

for(var i = 0; i < myJSONObject.abc.length; i++)
{
    var product = myJSONObject.abc[i];
    for(var j = 0; j < product.length; j++)
    {
        var version = product[j];
    }
}
You could take it slightly further and alter your JSON object's structure a bit to make it more easily understandable.
*/


/*


/*

var catalog =
{
    "1": [
        {
            "name": "prod 1",
            "versions": [
                "ver 1",
                "ver 2"
            ]
        },
        {
            "name": "prod 2",
            "versions": [
                "ver 1",
                "ver 2"
            ],
        },
    ],
    "2": [
        {
            "name": "prod 1",
            "versions": [
                "ver 1",
                "ver 2"
            ]
        },
        {
            "name": "prod 2",
            "versions": [
                "ver 1",
                "ver 2"
            ]
        }
    ]
};
var i;
console.log(catalog[0]);
for(var i = 0; i < catalog.length; i++)
{
    var product = catalog[i];
    console.log(product);
    var productName = product[2];
    console.log(productName);
    for(var j = 0; j < product.versions.length; j++)
    {
        var version = product.versions[j];
    }

*/

let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
}
for (let key in obj) {
  let value = obj[1];
  console.log(key, value);
}
// [
//   [apple, 28],
//   [orange, 17],
//   [pear, 54]
// ]
// returns "sandwich", "ham", "snack", "chips", "drink", "soda", "desert", "cookie", "guests", 3, "alcohol", false
