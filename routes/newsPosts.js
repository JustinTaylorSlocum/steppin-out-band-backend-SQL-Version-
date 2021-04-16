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

// Get All Posts
router.get('/getallposts', (req, res) => {
    let sql = `SELECT * FROM posts`;
    db.query(sql, (err, data, fields) => {
        if (err) throw err;
          res.send(data);
    })
  });

// Get Post
router.get('/getpost/:id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE id=${req.params.id}`;
  db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('Post fetched');
  });
});

// Create Post
router.post('/createpost', (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  console.log(title);
  console.log(body);
  const sql = `INSERT INTO posts(title, body, date) VALUES (?, ?, CURRENT_TIME())`;

  db.query(sql, [title, body], (err, result) => {
    console.log(result);
    console.log(err);
  });
});


// Update Post
/* 
app.get('/addpost1', (req, res) => {
    let post = {title:'Post One', body:'This is post number one'}
    let sql = 'INSERT INTO posts SET ?';
    let query = connection.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table ')
    });
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Added post 1.');
    });
});



app.get('/updatepost/:id', (req, res) => {
  let newTitle = 'Updated Title';
  let sql = `UPDATE posts SET title = '${newTitle}' WHERE id=${req.params.id}`;
  let query = connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('Post updated.');
  });
}) */

//Delete post
/* app.get('/deletepost/:id', (req, res) => {
  let newTitle = 'Updated Title';
  let sql = `DELETE FROM posts WHERE id=${req.params.id}`;
  let query = connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send('Post deleted.');
  });
}) */

// Post User


  module.exports = router;