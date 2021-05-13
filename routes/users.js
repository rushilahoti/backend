const mongoose = require('mongoose');
const User = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/getAllUsers', async (req, res) => {
    let user = await User.find();
    res.send(user)
});

router.post('/addNewUser', async (req, res)=>{


    server.use(express.json());
  server.post("/students",(req,res)=>{
      
      const user= new Student(req.body)
      user.save().then(()=>{
          res.status(201).send(user);
      }).catch((e)=>{
          res.status(400).send(e)
      })
    
  })

})
module.exports = router;