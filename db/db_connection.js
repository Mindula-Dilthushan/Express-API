var mysql = require('mysql')
var database;

function getConnection(){
    if (database){
        database = mysql.createConnection(
            {
                host:'localhost',
                user:'root',
                password:'1023',
                database:'expressjsAPI'
            }
        );
    }
    return database;
}

module.exports = getConnection();