const Photo = require('../models/Photo');
const fs = require('fs');

exports.getAboutpage = (req, res) => {
  res.render('about');
};

exports.getContactpage = (req, res) => {
  res.render('contact');
};

exports.getPhotopage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('update', {
    photo,
  });
};
