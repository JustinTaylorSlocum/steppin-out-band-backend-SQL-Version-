const express = require('express');
const app = express();
const mysql = require('mysql');
// Middleware
const cors = require('cors');
const bodyParser = require('body-parser');

let port = process.env.PORT || 3000;

// Routers
const postsRouter = require('./routes/newsPosts');
const gigsRouter = require('./routes/gigEvents');
const { debug } = require('console');

// Connect/Setup Database
const db = mysql.createConnection({
    host    : '162.241.252.119',
    user    : 'steppjb8_jslocum0001',
    password: 'paper7',
    database: 'steppjb8_steppin-out-data',
    port    :  3306
});

// use the modules
app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true})) // parsing incoming requests with urlencoded based body-parser

// use router
app.use('/posts', postsRouter);
app.use('/gigs', gigsRouter);

app.listen(port, () => {
    console.log("Server started on port 4000");
});
