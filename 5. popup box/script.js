let box = document.getElementById("model-box")

let closeBtn = document.querySelector('.close-icon')

// box.addEventListener('onmouseleave', ()=>{
//   box.style.display = 'block'
// })


setTimeout(() => {
  box.style.display = 'block';

}, 2000)


// document.onmouseleave = function() {
//   box.style.display = 'block';
// }

closeBtn.addEventListener('click', () => {
  box.style.display = 'none';
})