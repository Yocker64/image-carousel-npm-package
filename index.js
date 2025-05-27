

// let img4 = document.createElement("img");
// img4.src = "cliff.jpg"
// let img5 = document.createElement("img");
// img5.src = "oses.jpg"

function formatImages(img, height, width) {
  img.style.width = width;
    img.style.height = height;
}

function createImageCarousel() {

  let width = "1000px";
  let height =  "1000px";
  let img1 = document.createElement("img");
img1.src = "rose.jpg"
let img2 = document.createElement("img");
img2.src = "road.jpg"
let img3 = document.createElement("img");
img3.src = "roses.jpg"

let images = [img1, img2, img3];
images.forEach(function(img){
  formatImages(img, height, width)
  document.body.appendChild(img);
})



  // document.body.appendChild(img4);
  // document.body.appendChild(img5);


}

createImageCarousel();



module.exports = createImageCarousel;