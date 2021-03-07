const express = require('express');

require('dotenv').config();

app= express();

app.listen(process.env.PORT || 3000,() =>{
    console.log("Server opened on port "+process.env.PORT);
});

app.get('/',(req,res)=>{
    res.send("Hello world from node");
})
