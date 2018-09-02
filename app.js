const express = require('express')
const path = require('path')
const app = express()

var pjson = require('./package.json');
console.log(pjson.repository.url);

app.get('/', (req, res) => res.sendFile( path.join(__dirname + '/index.html') ) )
app.get('/menu', (req, res) => res.sendFile( path.join(__dirname + '/html/menu.html') ) )
app.get('/thomas', (req, res) => res.send('<html><pre>' + JSON.stringify(pjson,null,2) + '</pre></html>'))
app.get('/Elin', 
        function(req, res) { 
            res.send('Hello Elin!') 
        })

app.listen(3000, () => console.log('Example app listening on port 3000!'))