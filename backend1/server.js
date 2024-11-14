const express=require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv=require("dotenv").config();
const app=express();
// console.log(process.env.PORT)
// const prt=process.env.PORT || 5000;
const port = 5000;

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"))


app.use(errorHandler);

app.listen(port,()=>{
    console.log(`our server is runnig on  port ${port}`);
})

