const express = require('express');
const userRoutes = require('./routes/user');
require('dotenv').config();
app= express();

const mongoose = require('mongoose');
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connection to MongoDB was successful");
});

app.listen(process.env.PORT || 3000,() =>{
    console.log("Server opened on port "+process.env.PORT);
});

//use middleware to create routes
app.use("/api",userRoutes); // the api is industry best practice and its not mandatory

