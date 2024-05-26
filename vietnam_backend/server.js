const e = require('express');
const express = require('express');
const PORT = process.env.PORT || 3001;


const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

const mongoUrl = "mongodb+srv://sirishakvelavan:fireengine@cluster0.8jug1ym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl)
  .then(()=>{
    console.log("Database Connected");
  })
  .catch((e)=> {
    console.log(e);
  });
require('./UserDetails')
const User = mongoose.model("UserInfo");

app.get("/", (req,res) =>{
  res.send({status:"Started"})
})

app.post('/register', async(req, res)=>{
  const {mobile, password, fname, lname}= req.body;

  const oldUser = await User.findOne({mobile: mobile});

  if(oldUser){
    return res.send({data: "User already exists!"});
  }

  try{
    await User.create({
      mobile,
      password,
      fname: fname,
      lname: lname,
    });
    res.send({status: "ok", data: "User Created"});
  } catch (error){
    res.send({status: "error", data: error});
  }
});

app.listen(PORT, ()=> {
  console.log(`Server listening on ${PORT}`);
})

