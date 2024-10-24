var modal = document.getElementById("myModal"); //the entire modal
const slides = document.getElementsByClassName("slides"); //all images to go in slideshow
const captions = document.getElementsByClassName("captions"); //all captions for images
var modalImg = document.getElementById("modalImage"); //current modal image
var caption = document.getElementById("caption"); //current caption for image
var currentSlide; 

//replace sources of slides with high-res images
for (let i = 0; i < slides.length; i++) {
  slides.item(i).src = slides.item(i).src.substring(0, slides.item(i).src.indexOf("_LR")) + slides.item(i).src.substring(slides.item(i).src.indexOf("_LR")+3);
  slides.item(i).src = slides.item(i).src.replace("LowRes", "images");
}

function showSlides(n) {
  //opens modal to specific slide number
  modalImg.src = slides.item(n).src; //modal image source equals source of slides at n
  caption.innerHTML = captions.item(n).innerHTML; //caption text is alt text of slides at n
  openModal();
  currentSlide = n; //remember the current slide number
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
  caption.innerHTML = captions.item(currentSlide).innerHTML; //updates caption text
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("modalImage").src = null;
}