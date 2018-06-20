'use strict';
/* global shoppingList, store, Item */
/*eslint-env jquery*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

$.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
  console.log('api response:', response);
});

api.getItems(api.BASE_URL, function(data) {
  console.log(data);
}, function(err){
  console.error(err.status);
});

console.log(api.BASE_URL);

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });