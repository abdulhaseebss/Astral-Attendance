const mysql = require("mysql");



 const db = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: 'sql6702788@ec2-52-8-112-233.us-west-1.compute.amazonaws.com',
    password: '',
    database: 'sql6702788'
})


// Host: sql6.freesqldatabase.com
// Database name: sql6702788
// Database user: sql6702788
// Database password: DKdrfyevSz
// Port number: 3306


// Server: sql6.freesqldatabase.com via TCP/IP
// Server type: MySQL
// Server version: 5.5.62-0ubuntu0.14.04.1 - (Ubuntu)
// Protocol version: 10
// User: sql6702788@ec2-52-8-112-233.us-west-1.compute.amazonaws.com
// Server charset: UTF-8 Unicode (utf8)



module.exports = db;