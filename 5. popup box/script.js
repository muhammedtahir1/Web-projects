let box = document.getElementById("model-box")

let closeBtn = document.querySelector('.close-icon')

// box.addEventListener('onmouseleave', ()=>{
//   box.style.display = 'block'
// })


setTimeout(() => {
  box.style.display = 'block';

  // filter: blur(16px);
  document.querySelector('main').style.filter = 'blur(16px)';

}, 2000)


// document.onmouseleave = function() {
//   box.style.display = 'block';
// }

closeBtn.addEventListener('click', () => {
  box.style.display = 'none';

  // 
  document.querySelector('main').style.filter = 'blur(0px)';
})