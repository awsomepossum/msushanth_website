console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handle = function(e, ctx, callback) {
  var params = {
    Item: {
      date: Date.now(),
      message: "PLEASE WORK!"
    },

    TableName: 'guestbook'
  };

  docClient.put(params, function(err, data) {
    
  });
}
