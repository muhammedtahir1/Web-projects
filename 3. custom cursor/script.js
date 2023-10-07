let main = document.querySelector('main')
let cursor = document.getElementById('cursor')


main.addEventListener('mousemove', (event)=> {
  // console.log(event.which, event.x, event.y);

    cursor.style.top = event.y+'px'
    cursor.style.left = `${event.x}px`
  
})

// To prevent right click on the  page 

main.addEventListener('contextmenu' , (event)=>{
  // console.log(event.which);

  event.preventDefault()
})