const express=require("express");
const router=express.Router();

const {getContact,createContact,updateContact,deleteContact,getContactIndividual}=require("../controllers/contactController")

const app=express();

router.route("/").get(getContact).post(createContact); //since these two routes were same w added it in the same line

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)

router.route("/:id").get(getContactIndividual)

module.exports=router