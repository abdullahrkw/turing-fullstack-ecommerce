
exports.handler = (event, context, callback) => {
  console.log("test function invoked");
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({test :"this is test"})
    })
  }  