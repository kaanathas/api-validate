const AWS = require('aws-sdk');

exports.handler = async(event, context) => {

let data =JSON.parse(event.body)

console.log(data)
return {
    statusCode: 200,
    body: JSON.stringify(data) 
};
}


