// get the client
import mysql from 'mysql2/promise'


// create the connection to database
console.log("create connection pool ...")
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "vuhuynh9x",
    database: 'my_db'
})
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: "vuhuynh9x",
//   database: 'my_db'
// });


export default pool;
