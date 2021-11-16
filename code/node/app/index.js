const express = require('express');
const app = express();
const path = require('path');

app.use(express.static( path.join(__dirname,'/../../css')));
app.use(express.static( path.join(__dirname,'/../../images_of_pages')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));


app.get('/',(req, res) =>
{
    res.render('login');
})

app.get('/signup',(req, res) =>
{
    res.render('signup');
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

app.get('/gallery',(req, res) =>
{
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