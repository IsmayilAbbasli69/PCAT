const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

const PhotoSchema = new Schema({
  title: String,
  description: String,
  image:String,
  dateCreated:{
    type:Date,
    default:Date.now

  }
});

const Photo = mongoose.model('photos', PhotoSchema);

/*Photo.create({
 title: 'Photo title 2',
  description: 'This is a description 2',
});*/

