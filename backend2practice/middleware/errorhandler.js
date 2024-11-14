

const errorhandler=(err,req,res,next)=>{
    const code=res.statusCode?res.statusCode:500;
    if(code===400){
        res.json({title:"validation Required",message:err.message,stackTrace:err.stack});
        
    }
}

module.exports=errorhandler;