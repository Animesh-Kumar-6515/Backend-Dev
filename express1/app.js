
const express=require('express');
const path=require('path');
const app=express();
const router=express.Router();
const bodyParser=require('body-parser')

app.use(bodyParser.json());
// app.get('/saveuser',(req,res)=>{
//     // console.log(req.params.studentId,req.params.bookId);
//     // console.log("req for index.html file");
//     // res.sendFile(path.join(__dirname+'/views/index.html'));
//     console.log(req.query.username);
//     res.send(req.query.username);
// })

app.get('/',(req,res)=>{
    console.log("req for index.html file");
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

// app.get('/saveUser',(req,res)=>{
//     res.json({username:req.query.username,password:req.query.password});
// })


// router.route('/saveuser').post((req,res)=>{
//     const username=req.body.username;
    
//     res.json({username,password:req.body.password});
// })

// app.post('/saveuser', (req, res) => {
//     const username = req.body.username; // Get username from the form
//     const password = req.body.password; // Get password from the form
//     console.log(`Received data: Username = ${username}, Password = ${password}`);
    
//     // Send a response
//     res.json({ message: 'Data received successfully!', username });
// });

app.get('/home',(req,res)=>{
    res.set('Content-Type','text/plain');
    res.send('Welcome');
})

// app.get('/register',(req,res,next)=>{
//     console.log("request for Register.html file");
//     // console.log(req.query.username);
//     res.sendFile(path.join(__dirname+'/views/register.html'));
//     // res.send(req.query.username)
//     // res.sendFile('./views/register.html')
//     // next();
// })

router.route('/register').post((req,res)=>{
    res.json({username:req.body.username});
})



app.get('/about',(req,res)=>{
    console.log("request for about.html file");
    res.send("About us page")
    
})
app.use(router);

app.listen(3000);
console.log("Server is running on port")