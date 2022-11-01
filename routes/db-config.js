const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({path: "./.env"});

// const db = mysql.createConnection({
//   host : 'localhost',
//   user : 'root',
//   password : '',
//   database :'sql_login'
// });

const db = mysql.createConnection({
  host : process.env.DATABASE_HOST,
  user : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE
});
  function randm (min,max){
         var rndm = Math.random() * (max - min) + max;
         var rnum = Math.round(rndm);
         return rnum;
      }
// module.exports = randm;
module.exports = db;
module.exports.randm = randm;
