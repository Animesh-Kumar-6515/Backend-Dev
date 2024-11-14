const postData=(req,res)=>{
    const {name,email}=req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    console.log(req.body);
    res.status(201).json({message:"Data Posted"})
}


module.exports=postData