const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});


exports.handler = (event, context, callback) => {
  console.log('Function `stock-after-order` invoked');
  const data = JSON.parse(event.body);
  client.query(
    q.Update(
      q.Select('ref', q.Equals(q.Var("sku"),data.sku)),
      { data: { stock : 70 } }))
    .then((response) => {
        console.log("success", response)
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(response)
        })
     
    })
    .catch((error) => {
      console.log('error', error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
}
