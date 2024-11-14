const express=require("express");
const errorhandler = require("./middleware/errorhandler");

const app=express();

const port=5000;
app.use(express.json());
app.use("/api",require('./routes/contactRoutes'))
app.use(errorhandler)
app.listen(port,()=>{
    console.log(`Our app is running on port: ${port}`)
})