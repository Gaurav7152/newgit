//console.log("welcome");

const express=require('express');
const appObj = express();


appObj.get('/',(req,res)=>{
     res.json("Hello World")
    
})

const PORT=5000;
appObj.listen(PORT,function(){
console.log(`the sserver is running on port:${PORT}`);
})