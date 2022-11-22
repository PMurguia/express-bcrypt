const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.listen(3000)

app.get('/', function(req, res){
    res.send('<h1>hello world</h1>')
})

app.get('/adios', function(req, res){
    res.send('<h2>adios mundo</h2>')
})

app.get('/:name', function(req, res){
    res.send(`<h1>Hola ${req.params.name}</h1>`)
})

app.get('/adios/:name', function(req, res){
    res.send(`<h2>adios ${req.params.name}}</h2>`)
})

app.get('/hola/:name', function(req, res){
    res.send(`<h2>hola ${req.params.name}}</h2>`)
})