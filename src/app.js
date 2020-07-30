"use strict";
exports.__esModule = true;
var sharp_1 = require("sharp");
var img = sharp_1["default"]('./sample.jpeg');
img.metadata().then(function (meta) {
    console.info(meta);
    return img
        .resize(Math.round(meta.width / 2))
        .grayscale()
        .rotate(90)
        .withMetadata()
        .png()
        .toFile('sample-2.png', function (data) {
    });
})["catch"](function (err) {
    console.info(err);
});
