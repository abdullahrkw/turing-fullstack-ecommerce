

const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});


exports.handler = (event, context, callback) => {
  console.log('Function `stock-read` invoked');
  const data = JSON.parse(event.body);
  return client.query(q.Paginate(q.Match(q.Index("stock-by-sku"),data.sku)))
    .then((response) => {
      console.log('success', response );
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
