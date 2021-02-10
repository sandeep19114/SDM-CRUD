const mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sand",
    database: "sdm",
    multipleStatements: true
}) 

conn.connect((err)=> {
    if(!err) 
        console.log("db connected");
    else
        console.log("db not connected");
})

// conn.query("select * from attendence", (err, rows, fields) => {
//     if(!err) {
//         console.log(rows)
//     }
//     else 
//         console.log(err)
// })

module.exports = conn;