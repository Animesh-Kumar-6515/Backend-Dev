//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContact=(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
}


const createContact=(req,res)=>{
    console.log(`the body of the post is`, req.body);
    const {name,phone,email}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
        // next(error);
    }
    res.status(201).json({message:"contact added"});
}

const updateContact=(req,res)=>{
    res.send(200).json({message:`contact updated for ${req.params.id}`})
}

const deleteContact=(req,res)=>{
    res.status(200).json({message:`contact deleted ${req.params.id}`});
}

const getContactIndividual=(req,res)=>{
    res.status(200).json({message:`Get for ${req.params.id}`});
}


module.exports={getContact,createContact,updateContact,deleteContact,getContactIndividual}