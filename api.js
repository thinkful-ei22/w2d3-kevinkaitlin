'use strict';
/*eslint-env jquery*/

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/KaitlinKevin';
  
  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  
  const createItem = function (name, callback) {    
    const newItem = {name};
    $.ajax({
      url: `${BASE_URL}/items/`,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newItem),
      success: callback,
    });
  };

  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
  };
}());



// const getItems = (function(item){
//   try {
//     Item.validateName(name);
//     this.items.push(item);
//   } catch(e) {
//     console.log(e.message);
//   }
// }());
