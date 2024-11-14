const express=require("express");
const { errorHandler } = require("./middleware/errrorHandler");

const app=express();
port=5000;


app.use(express.json());
app.use("/",require("./routes/contactRoutes"))

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`our server is running on port ${port}`)
})