const http=require('http');
const fs=require('fs/promises');
// const fs=require('fs');

let server= http.createServer(async(req,res)=>{
    // let displaydata="";
    // const displaydata=await fs.readFile('./docs/display.txt','utf8')
    fs.readFile('./docs/display.txt')
    res.write("Hi animesh")
    res.write(displaydata);
    res.end();
})

server.listen(2080);
console.log("server running....");
