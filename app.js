const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;

app.get("/",(req,res)=>{

    res.send("Welcome to ShopEasy From HTS ");
})

const server=app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
})

module.exports={app,server}