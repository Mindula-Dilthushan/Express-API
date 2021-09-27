var express = require('express')
const connection = require('../db/db_connection')

var router = express.Router()

//Get Method--------------------------------------------
router.get('/', function (req, res) {
    connection.query('SELECT * FROM Admin', function (err, rows) {
        if (err) throw err
        res.json(rows)
    })
})

//Post Method--------------------------------------------
router.post('/', function (req, res) {
    connection.query('INSERT INTO Admin VALUES(?,?,?)', [req.headers.adminId, req.headers.adminName, req.headers.adminEmail], function (err, rows) {
        if (err) throw err
        res.json(rows);
    })
})

//Delete Method--------------------------------------------
router.delete('/', function (req, res) {
    connection.query('DELETE FROM Admin WHERE adminId=?', req.headers.id, function (err, rows) {
        if (err) throw err
        res.json(rows)
    })
})

//Put Method--------------------------------------------
router.put('/', function (req, res) {
    connection.query('UPDATE Admin set adminName=?, adminEmail=? WHERE adminId=?', [req.headers.adminName, req.headers.adminEmail,req.headers.adminId], function (err, rows) {
        if (err) throw err
        res.json(rows)
    })
})

module.exports = router