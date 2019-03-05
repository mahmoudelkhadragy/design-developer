/* global console */

var modal = document.getElementById("simplemodal"),  //get modal
    modalBtn = document.getElementById("modalbtn"),   //get open modal button
    closeBtn = document.getElementsByClassName("closeBtn")[0];   //get close button

//listen for open click
modalBtn.addEventListener("click", openModal);

//listen for close click
closeBtn.addEventListener("click", closeModal);

//listen for outside click
window.addEventListener("click", outsideClick);

//function to open modal
function openModal() {
    "use strict";
    modal.style.display = 'block';
}

//function to close modal
function closeModal() {
    "use strict";
    modal.style.display = 'none';
}

//function to close modal if outside click in window
function outsideClick(e) {
    "use strict";
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}



