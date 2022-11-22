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