const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usermodel = require('./models/usermodel');
const cors=require('cors');


app.use(express.json());


  app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }));

  
  app.use(cors())

mongoose.connect("url")
.then(() =>{
    console.log("Db is on");
})
.catch(err =>console.error(err))


app.post("/saveUser",async(req,res)=>{

    console.log("hello jdeoihdjoiwed");
    console.log(req.body.userID);
   
    const newuser=new usermodel({
"userID":req.body.userID,
"username":req.body.username,
"name":req.body.name,
"userImage":req.body.userImage



    });
    try{
        
      const result=await newuser.save();
      res.status(200).json(result);
    }
    catch(err)
    {
        console.log(err);
    }


    

})

app.get("/getUser1",async(req, res)=>{
try{

    console.log("lol");
  const result= await usermodel
    .find({ username: { $regex: req.query.text, $options: "i" } });

console.log(result);
    res.status(200).json(result);

}
catch(e)
{
    console.log(e);
}

});


app.post("/updateuser",async(req, res)=>{

    try{

        console.log("lhndelihfeoiwfhoewinfnewf \t"+req.body.userID+ "\t" + req.body.userID.imageurl);
        const result=await usermodel.updateOne({"userID":req.body.userID},{$set:{"username":req.body.username,
    
        "name":req.body.name,
        "userImage":req.body.imageurl
    }});
        

        res.status(200).json(result);



    }

    catch(e)
    {


    }
})


app.listen(5000,()=>{

    console.log("live");

})
