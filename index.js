const round = document.querySelector(".round")
const container = document.querySelector(".container")

round.addEventListener('mouseover', event =>{
    alert('Вас поймали!')
})


container.addEventListener("mousemove",event => {
    console.log(event)

   setTimeout(()=> {
        let y = event.pageY - 30
        round.style.top = `${y}px`
        let x = event.pageX - 30
        round.style.left = `${x}px`
   
        round.style.transition = ".2s ease"
   }, 5)

    if (event.x < round.getBoundingClientRect().x) {
        round.style.transform ='scale(-1, 1)'
      container.style.cursor = 'url("assets/left.png"), auto'
    } else {
        round.style.transform ='scale(1, 1)'
        container.style.cursor = 'url("assets/right.png"), auto'
    }

} )
