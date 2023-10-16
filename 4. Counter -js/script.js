let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let reset = document.getElementById("reset")

let display = document.getElementById("display")
let counter = 0

btn1.addEventListener('click', () => {
  // alert("hi")
  counter++
  // console.log(counter);

  display.innerHTML = counter


})

btn2.addEventListener('click', () => {
  counter--
  // console.log(counter);
  display.innerHTML = counter

  // Don't know the logic yet

  if (counter < 0) {
    display.innerHTML = 0
    counter++
  }
})

reset.addEventListener('click', () => {
  counter = 0

  display.innerHTML = counter
})

