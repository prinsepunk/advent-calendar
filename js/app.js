const cerrar = document.getElementById('close');
const modalContainer = document.getElementById('modal-container');
// const main = Array.from(document.getElementById('main'));
const section = document.getElementsByTagName('section');
const div = document.getElementsByTagName('div');
const day1 = document.getElementById('day1');
const modal1 = document.getElementById('modal1');
const day2 = document.getElementById('day2');
const modal2 = document.getElementById('modal2');

cerrar.addEventListener('click', () =>{
    modal1.classList.toggle('modal-close');
    setTimeout(() => {
        modalContainer.style.opacity = '0';
        modalContainer.style.visibility = 'hidden';
    }, 600);
})

window.addEventListener('click', (e) =>{
    if(e.target === modalContainer){
        modal1.classList.toggle('modal-close');
        setTimeout(() => {
            modalContainer.style.opacity = '0';
            modalContainer.style.visibility = 'hidden';
        }, 600);
    }
})

// day1.addEventListener('click', (e) =>{
//      e.preventDefault();
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

for(i = 0; i < div.lenght; i++){
     section[i].addEventListener('click', (e) =>{
        e.preventDefault();
        modalContainer.style.opacity = '1';
        modalContainer.style.visibility = 'visible';
        div[i].classList.toggle('modal-close');
    })
}

