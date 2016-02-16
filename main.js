// code goes here :)
// 1)
var total = 0;
items.forEach(function(el) {
  total += el.price;
})
var avg = total / items.length;
document.getElementById('answer1').innerHTML = avg;

// 2)


// function costSpecific(el) {
//   return el.price >= 14 && el.price <= 18;
// }
//
// items.filter(costSpecific);

var costFilterArr = items.filter(function(el) {
  return el.price >= 14 && el.price <= 18;
  console.log(el.price >= 14 && el.price <= 18);
})

var costArray = [];
costFilterArr.forEach(function(el) {
  costArray += (el.title);
})
document.getElementById('answer2').innerHTML = costArray;

// 3)

// Need to filter currency code then map to return name and price

var gbpItem = items.filter(function(el) {
  return el.currency_code === "GBP";
})

// map it
var gpbTitle = gbpItem.map(function(el) {
  return {
    Title: el.title,
    Price: el.price
  }
})
document.getElementById('answer3').innerHTML = "Name: " + gpbTitle[0].Title + " Price: $" + gpbTitle[0].Price;

// 4

var woodFilter = items.filter(function(el) {
  return el.materials.indexOf("wood") !== -1;  // indexOf will return an index
})

var woodMap = woodFilter.map(function(el) {
  return "</br>" + el.title;
})


document.getElementById('answer4').innerHTML = woodMap;

// 5)

// filter for an array of materials containing 8 or more items
var longItemArr = items.filter(function(el) {
    return el.materials.length >= 8;
})
var mappedLongItemArr = longItemArr.map(function(el) {
  return {
    name: el.title,
    numItems: el.materials.length,
    madeOf: el.materials
  }
})

var newStr = "";
mappedLongItemArr.forEach(function(el) {
  newStr += "</br>" + "Title: " + el.name + " Num of Items:" + el.numItems + " Made of " + el.madeOf;
})
document.getElementById('answer5').innerHTML = newStr;

// 6) How many items made by their sellers --> filter by who_made and "i_did"

var makerArray = items.filter(function(el) {
    return el.who_made === "i_did";
})

var mappedMakerArray = makerArray.map(function(el) {
  return "</br>" + el.title;
})

document.getElementById('answer6').innerHTML = makerArray.length + " items total." + "</br>" + mappedMakerArray;
