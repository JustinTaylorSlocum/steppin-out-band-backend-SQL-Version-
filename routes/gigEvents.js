const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// connect/setup database
const db = mysql.createConnection({
    host    : '162.241.252.119',
    user    : 'steppjb8_jslocum0001',
    password: 'paper7',
    database: 'steppjb8_steppin-out-data',
    port    :  3306
  });

  
// Get All Gigs
router.get('/getgigs', (req, res) => {
    let sql = `SELECT * FROM gigevents`;
    db.query(sql, (err, data, fields) => {
        if (err) throw err;
          res.send(data);
    })
  });

// Get Gig
router.get('/getgig/:id', (req, res) => {
  let sql = `SELECT * FROM gigevents WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('Post fetched');
  });
});

// Post Gig
router.post('/creategig', (req, res) => {
  const reqBody = req.body.gigData;

  const sql = `INSERT INTO gigevents(title, description, time, address, phone, city, state, day, month, year) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [reqBody.title, reqBody.description, reqBody.time, reqBody.address, reqBody.phone, reqBody.city, reqBody.state, reqBody.day, reqBody.month, reqBody.year], (err, result) => {
    console.log(result);
    console.log(err);
  });
});

module.exports = router;