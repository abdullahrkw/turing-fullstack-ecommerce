
exports.handler = (event, context, callback) => {
  console.log("test function invoked");
    callback(null, {
      statusCode: 200,
      body: 'No worries  all is working fine!'
    })
  }  