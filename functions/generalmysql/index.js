let mysql = require('mysql');

  



let connection = mysql.createConnection({

    host: "database-2.c78aiftx69ym.us-east-2.rds.amazonaws.com",

    user: "root",
    port:'3306',
    password: "12345678",

    database: "innodb",

});

// console.log(connection);

exports.handler = (event, context, callback) => {

    connection.query('show tables', function (error, results, fields) {

        if (error) {

            connection.destroy();

            throw error;

        } else {

            // connected!

            console.log(results);

            callback(null, {
                statusCode: 200,
                body: JSON.stringify(results)
              });

            connection.end(function (err) { callback(err, results);});

        }

    });

};