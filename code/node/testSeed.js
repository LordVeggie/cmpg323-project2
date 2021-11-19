const mongoose = require('mongoose');

const Image = require('./app/models/images')

mongoose.connect("mongodb+srv://Storm:%40Storm4321@cluster0.mpusy.mongodb.net/Project2?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log("Could not connect to database", err);
  });

const image = new Image
({
    name: 'test image',
    imagUrl: 'https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png',
    GeoLocation: '22.111, -8.24 ',
    CaptuerBy: 'bill bob',
    CaptureDate: '1990/09/27',
    album:'default'   
})

image.save().then(p =>
    {
        console.log(p)
    })
    .catch(e =>
    {
        console.log(e)
    })