const express = require('express')
const api = require('./routes/api')
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routing middleware
app.use('/api', api)

// Static content
// Main activity tracking page
app.get('/', (req,res) => {
    // Blah
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

// Historical results
app.get('/history', (req,res) => {
    // Blah
    res.sendFile(path.join(__dirname,'/public/history.html'))

})

// 404
app.get('*',(req,res) => {
    // Blah
    res.sendFile(path.join(__dirname,'/public/404.html'))
})

module.exports = app;