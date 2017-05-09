import $ from 'jquery';

const bucketId = '947daa5b-4ea5-4ca4-a503-fc4a509acbae';
const baseUrl = 'https://spiffy-todo-api.herokuapp.com/api/';

const Api = {

  refreshData: function(cb) {
    $.ajax({
      url: `${baseUrl}items?bucketId=${bucketId}`
    })
    .done((data) => {
      console.log('what data do I have?', data);
      cb(data);
    });
  },

  removeFromList: function(id, cb) {
    $.ajax({
      url: `${baseUrl}item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done(cb);
  },

  createNewItem: function(inputText, cb) {
    $.ajax({
      url: `${baseUrl}item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done(cb);
  }
}

module.exports = Api;
