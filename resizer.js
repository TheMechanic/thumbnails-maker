const sharp = require('sharp');
const fs = require('fs');

// Folders
const imgsFolder = './img/';
const thumbsFolder = './thumbs/';
const thumbWidth = 200;
const thumbHeight = 150;

fs.readdir(imgsFolder, (err, files) => {
  if (err) {
    throw 'Error while reading folder !';
  }

  // resize images
  for (let i = 0, lgt = files.length; i < lgt; i++) {
    sharp(imgsFolder + files[i])
      .resize(thumbWidth, thumbHeight)
      .toFile(thumbsFolder + files[i], function(err, info) {
        if (err) {
          console.log(err);
        }
        console.log('Thumbnail for ' + files[i] + ' generated !');
      });
  }
});
