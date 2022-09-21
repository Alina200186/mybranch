const express = require('express')
const app = express()
const port = 3000
const bodyparser=require("body-parser")
var user_name
var password
app.use(bodyparser.json())
app.get('/', (req, res) => {
  res.send('Hello '+user_name)
})

app.post('/post',(req,res)=>{
    user_name=req.body.username
    password=req.body.password
    res.end("yes")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})