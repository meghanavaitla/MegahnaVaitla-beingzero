const express = require('express')
const app = express()
const port = 3000
//this line tells express to serve
//js or css files from front end folder
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))

app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('Register'))
var stdnt={"name":"Beingzero","college":"VNRVJIET","regno":"23743969"}
app.get('/data',(req,res)=>res.json(stdnt))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))