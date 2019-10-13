var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_junsu',
  password        : '1872',
  database        : 'cs290_junsu'
});

module.exports.pool = pool;
