

const express=require("express");
const postData = require("../controller/contactController");

const router=express.Router();

router.route("/").get((req,res)=>{
    res.status(200).send("This is home page of the application!!")
})

router.route("/").post(postData);


module.exports=router