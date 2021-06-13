const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
const port = 3000;

app.set('/', 'html');
//Static files
app.use(express.static(path.join(__dirname, "/")));
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.use(express.json());

//Navigation
app.get('',(req,res) => {
    res.render('index', {title: 'Home Page'})
})

app.get('/museum',(req,res) => {
    res.render('museum', {title: 'List of Museums'})
})

app.get('/MTM',(req,res) => {
    res.render('MTM', {title: 'MTM'})
})

app.get('/AR',(req,res) => {
    res.render('AR', {title: 'AR'})
})


app.listen(port, () => console.info('listening on port'));

// https.createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
// }, app)
// .listen(5000, function () {
//     console.log('listenn, ')
// });
