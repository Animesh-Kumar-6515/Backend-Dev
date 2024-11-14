

const getData=(req,res)=>{
    res.status(200).json({message:"Hi from server side"})
}

const postData=(req,res)=>{
    const {name,email}=req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    console.log(req.body)
    res.status(201).json({message:"Posted succesfully"})
}


module.exports={getData,postData}