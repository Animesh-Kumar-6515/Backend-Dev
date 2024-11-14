const { constants } = require("../constants");

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    // res.json({title:"Validation Required" ,message:err.message,stackTrace:err.stack});
    switch (statusCode) {
        case constants.validataion_error:
            res.json({title:"Validation Required" ,message:err.message,stackTrace:err.stack});
            break;
        case constants.server_error:
            res.json({title:"Server Error" ,message:err.message,stackTrace:err.stack})
            break;
        default:
            console.log("No error")
            break;
    }
}
module.exports={errorHandler};