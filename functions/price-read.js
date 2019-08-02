
const faunadb = require('faunadb');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});


exports.handler = (event, context, callback) => {
  console.log('Function `price-read` invoked');
  const data = JSON.parse(event.body);
  return client.query(q.Paginate(q.Match(q.Index("price-by-sku"),data.sku)))
    .then((response) => {
      const todoRefs = response.data[0][1];
      console.log('success', response );
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify({price:todoRefs})
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
