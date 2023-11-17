const express = require('express'); 
const app = express(); 
  
app.get('/' , (req,res)=>{ 
   // 200 status code means OK 
   res.send('Hello World');
//    res.status().send(200);  
}) 
  
// Server setup 
app.listen(4000 , ()=>{ 
    console.log("server running"); 
});
