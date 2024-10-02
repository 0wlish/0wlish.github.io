// Get the modal
var modal = document.getElementById("myModal");
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
  var i;
  const slides = document.getElementsByClassName("slides");
  var modalImg = document.getElementById("modalImage");
  modalImg.src = slides.item(n).src.substring(0, slides.item(n).src.indexOf("_LR")) + slides.item(n).src.substring(slides.item(n).src.indexOf("_LR")+3);
  modalImg.src = modalImg.src.replace("LowRes", "images");
  openModal();

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