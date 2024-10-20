// Get the modal
var modal = document.getElementById("myModal"); //the entire modal
const slides = document.getElementsByClassName("slides"); //all images to go in slideshow
var modalImg = document.getElementById("modalImage"); //current modal image
var currentSlide; 

//replace sources of slides with high-res images
for (let i = 0; i < slides.length; i++) {
  slides.item(i).src = slides.item(i).src.substring(0, slides.item(i).src.indexOf("_LR")) + slides.item(i).src.substring(slides.item(i).src.indexOf("_LR")+3);
  slides.item(i).src = slides.item(i).src.replace("LowRes", "images");
}
/*
function openModal(){
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    //img.onclick = openModal();
    modal.style.display = "block";
    modalImg.src = this.src.substring(0, this.src.indexOf("_LR")) + this.src.substring(this.src.indexOf("_LR")+3);
    modalImg.src = modalImg.src.replace("LowRes", "images");
    captionText.innerHTML = this.alt;
}
*/

function showSlides(n) {
  //opens modal to specific slide number
  modalImg.src = slides.item(n).src; //modal image source equals source of slides at n
  openModal();
  currentSlide = n; //remember the current slide number
  //console.log(currentSlide);

  /*
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 0) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt; */
}

function plusSlides(n) {
  currentSlide += n; //current slide is itself plus n

  //if index currentSlide is out of bounds of HTMLCollection slides
  if (currentSlide >= slides.length) {
    currentSlide -= slides.length;
  }
  if (currentSlide < 0) {
    currentSlide += slides.length;
  }
  
  modalImg.src = slides.item(currentSlide).src; //updates source of modal image to new source
  console.log(currentSlide);
  console.log(slides.item(currentSlide).src);
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}
/*
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  
}*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("modalImage").src = null;
} 