const express=require("express");
const { getData, postData } = require("../controllers/contactController");
const router=express.Router();
const app=express();


router.route("/").get(getData)

router.route("/").post(postData)

router.route("/:id").delete((req,res)=>{
    res.status(200).send("ID deleted")
})

module.exports=router