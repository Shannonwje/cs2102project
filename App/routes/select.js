/* required for database connection */
var express = require('express');
var router = express.Router();

/*const sql_query = require('../database/allQueries');*/

const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

/* required for database connection */

var sql_query = 'SELECT * FROM customers';

router.get('/', function(req, res, next) {
	pool.query(sql_query, (err, data) => {
		res.render('select', { title: 'Database Connect', data: data.rows });
	});
});


/* SQL Query */
/* this was the example query

router.get('/', function(req, res, next) {
	pool.query(sql_query.query.QUERY_FUNC_NAME, (err, data) => {
		SELECT * FROM customers;
	});
});
*/


module.exports = router;
