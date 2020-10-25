// -1 because array members start from 0.
var NumberOfImages = 11 - 1;

var img = new Array(NumberOfImages);

img[1] = "Photos/2.jpg";
img[2] = "Photos/3.jpg";
img[3] = "Photos/4.jpg";
img[4] = "Photos/5.jpg";
img[5] = "Photos/6.jpg";
img[6] = "Photos/7.jpg";
img[7] = "Photos/8.jpg";
img[8] = "Photos/9.jpg";
img[9] = "Photos/10.jpg";
img[10] = "Photos/12.jpg";
img[11] = "Photos/13.jpg";

// Array key of current image.
var imgNumber = 0;

function NextImage() {
    // Stop moving forward when we are out of images.
    if (imgNumber < NumberOfImages) {
        imgNumber++;
        document.images["SwitchingImage"].src = img[imgNumber];
    }
}

function PreviousImage() {
    // Stop moving backward when we are out of images.
    if (imgNumber != 0) {
        imgNumber--;
        document.images["SwitchingImage"].src = img[imgNumber];
    }
}


function DisplayImage(id) {
    imgNumber = id;
    document.images["VCRImage"].src = "full_images/" + img[id];
}
