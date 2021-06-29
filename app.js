const express = require('express');
const app = express();

const http = require('http');
const port = (3000, () => console.info('listening on port'));

//telling the path
const path = require('path');
app.use(express.static(path.join(__dirname, "/")));
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/object', express.static(__dirname + 'public/object'))
app.use('/pattern', express.static(__dirname + 'public/pattern'))

//shows homepage
app.get('',(req,res) => {
    res.render('index', {title: 'Home Page'})
})
