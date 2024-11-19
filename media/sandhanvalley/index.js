const testFolder = 'waterfall/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        console.log("<div class='grid-item'>" +
            "<a class='img-box' href='media/sandhanvalley/waterfall/IMG_20230819_122129.jpg'>" +
            "<img src='media/sandhanvalley/waterfall/" + file + "' alt='' />" +
            "</a>" +
            "</div>");
    });
});