const fs = require('fs');
let b=[]
fs.readFile('./data.json', 'utf8', (err,data)=>{
    if(!err){
        console.log(data);
        b= data;
    } else {
      console.error(err);
    }
  
})
const userData= fs.readFileSync('./data.json')
const users=JSON.parse(userData)

const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send(b)
})


app.listen(3000, ()=>{
console.log("hello")
} );