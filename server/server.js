const express = require('express');
const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/login", (req,res)=>{
  const {username, password} = req.body
  if(username==="admin" && password==="admin"){
    res.send({
      status:1,
      username
    })
  }else{
    res.send({
      status:0,
      message:"Username or password incorrect."
    })
  }
});


app.listen(3001,(err)=>{
  if(!err) console.log('http://localhost:3001/');

})
