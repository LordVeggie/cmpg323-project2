const mongoose = require('mongoose');

const Image = require('./models/images')

mongoose.connect("mongodb+srv://Storm:%40Storm4321@cluster0.mpusy.mongodb.net/Project2?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log("Could not connect to database", err);
  });
