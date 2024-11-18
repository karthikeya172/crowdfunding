import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import UserinfoModel from "./model/Userinfo.js"

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Crowdfunding")

app.get('', (req, res) => {  
    res.send('Welcome to the Crowdfunding API');  
});  

app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    UserinfoModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("User doesn't exist")
        }
    })

})
app.post('/signup',(req,res)=>{
    UserinfoModel.create(req.body).
    then(users => res.json(users))
    .catch(err =>res.json(err))
})
app.listen(3002, ()=>{
    console.log("Server is running")
})