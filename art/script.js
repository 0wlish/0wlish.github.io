// Get the modal
var modal = document.getElementById("myModal");
/*
function openModal(){
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    //img.onclick = openModal();
    modal.style.display = "block";
    modalImg.src = this.src.substring(0, this.src.indexOf("_LR")) + this.src.substring(this.src.indexOf("_LR")+3);
    modalImg.src = modalImg.src.replace("LowRes", "images");
    captionText.innerHTML = this.alt;
}
*/

function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 