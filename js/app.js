// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}




// const cerrar = document.getElementById('close');
// const modalContainer = document.getElementById('modal-container');
// // const main = Array.from(document.getElementById('main'));
// const section = document.getElementsByTagName('section');
// const div = document.getElementsByTagName('div');
// const day1 = document.getElementById('day1');
// const modal1 = document.getElementById('modal1');
// const day2 = document.getElementById('day2');
// const modal2 = document.getElementById('modal2');

// cerrar.addEventListener('click', () =>{
//     modal1.classList.toggle('modal-close');
//     setTimeout(() => {
//         modalContainer.style.opacity = '0';
//         modalContainer.style.visibility = 'hidden';
//     }, 600);
// })

// window.addEventListener('click', (e) =>{
//     if(e.target === modalContainer){
//         modal1.classList.toggle('modal-close');
//         setTimeout(() => {
//             modalContainer.style.opacity = '0';
//             modalContainer.style.visibility = 'hidden';
//         }, 600);
//     }
// })

// day1.addEventListener('click', (e) =>{
//     e.preventDefault();
//      modalContainer.style.opacity = '1';
//      modalContainer.style.visibility = 'visible';
//      modal1.classList.toggle('modal-close');
// })

// day2.addEventListener('click', (e) =>{
//     e.preventDefault();
//     modalContainer.style.opacity = '1';
//     modalContainer.style.visibility = 'visible';
//     modal2.classList.toggle('modal-close');
// })

// for(i = 0; i < div.lenght; i++){
//      section[i].addEventListener('click', (e) =>{
//         e.preventDefault();
//         modalContainer.style.opacity = '1';
//         modalContainer.style.visibility = 'visible';
//         div[i].classList.toggle('modal-close');
//     })
// }


