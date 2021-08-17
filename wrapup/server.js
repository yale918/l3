const express = require('express')
const server = express()
const PORT = 7777


server.use(express.static('public'))

server.get('*',(req,res)=>{
  console.log("request from:",req)
  res.sendFile(__dirname+"/public/index.html")
})



server.listen(PORT,()=>{
  console.log("#listening: ",PORT)
})