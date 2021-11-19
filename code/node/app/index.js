const express = require('express');
const app = express();
const path = require('path');

//temp palce for almost every thing bleow this point just have no clue what i am dong so mhe
const mongoose = require('mongoose');

const Image = require('./models/images')

mongoose.connect("mongodb+srv://Storm:%40Storm4321@cluster0.mpusy.mongodb.net/Project2?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log("Could not connect to database", err);
  });

app.use(express.static( path.join(__dirname,'/../../css')));
app.use(express.static( path.join(__dirname,'/../../images_of_pages')));
app.use(express.static( path.join(__dirname,'/java')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));


app.get('/',(req, res) =>
{
    res.render('v2/login');
})

app.get('/signup',(req, res) =>
{
    res.render('v2/signup');
})

app.get('/shared',(req, res) =>
{
    res.render('shared');
})

app.get('/account',(req, res) =>
{
    res.render('account');
})

app.get('/friends',(req, res) =>
{
    res.render('friends');
})

app.get('/gallery',async (req, res) =>
{
    //const Images = await Image.find({});
    //console.log(Images);
    res.render('gallery');
})

app.get('/home',(req, res) =>
{
    res.render('home');
})

app.listen(3000, ()=>
{
    console.log("LISTENING ON PORT 3000 " + path.join(__dirname,'/../../css'));
})