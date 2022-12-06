const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const methodOverride = require('method-override');
const ejs = require('ejs');
const app = express();
const path = require('path');
const Photo = require('./models/Photo');

const photoControllers = require('./controllers/photoControllers');
const pageControllers = require('./controllers/pageControllers');

mongoose.connect('mongodb+srv://ismayil:abX0mw8XrWEO1Wnk@cluster0.nzqkay3.mongodb.net/pcat-node-project?retryWrites=true&w=majority')
.then(()=>{
  console.log('DB connected')
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.set('view engine', 'ejs');



app.get('/', photoControllers.getAllPhotos);

app.get('/photo/:id', photoControllers.getPhoto);

app.get('/about', pageControllers.getAboutpage);

app.get('/contact', pageControllers.getContactpage);

app.post('/photo', photoControllers.createPhoto);

app.get('/photo/update/:id', pageControllers.getPhototpage);

app.put('/photo/:id', photoControllers.updatePhoto);

app.delete('/photo/:id', photoControllers.deletePhoto);

const port=process.env.PORT || 5000

app.listen(port, () => {
  console.log('Server has been started');
});
