const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if (req.url === '/favicon.ico') {
        res.writeHead(204); // Send no content for favicon requests
        res.end();
        return;
    }
    fs.readFile('./data/names.txt','utf8',(err,data)=>{
        let st="";
        let arr=[];
        let disdata=(data);
        // console.log(typeof(disdata));
        console.log(disdata);
        for(let i=0;i<disdata.length;i++){
            if(disdata[i]===","){
                console.log("yes comma");
                arr.push(st);
                st="";
            }
            else{
                st=st+disdata[i];
            }
        }
        arr.push(st);
        arr.sort();
        for(let i=0;i<arr.length;i++){
            console.log(arr[i]);
            
            fs.appendFile('./sortedData/sortedData.txt',arr[i]+',',(err)=>{
                console.log(err);
            })
        }
        fs.readFile('./sortedData/sortedData.txt',(err,data)=>{
            res.write(data);
            res.end();
        })
        
    })
})
server.listen(3000);
console.log("Server running");