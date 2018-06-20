'use strict';
/*eslint-env jquery*/

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.om/KaitlinKevin';
  const getItems = function(base, callback, error) {
    $.ajax(
      {
        method: 'GET',
        url: `${base}/items/`,
        success: callback,
        error,
      }
    );
  };
  return {getItems};
}());

const createItem = (function (newItem) {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.om/KaitlinKevin';
  const getItems = function(callback) {
    $.ajax(
      {
        method: 'POST',
        url: `${BASE_URL}/items/`,
        contentType: 'application/json',
        data: JSON.stringify({name: newItem}),
        success: callback,
      }
    );
  };
  return {getItems};
}());
