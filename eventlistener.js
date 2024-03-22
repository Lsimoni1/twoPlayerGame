window.addEventListener('keydown',  (event) => {
    switch(event.key){
        case 'a':
            keys.a.pressed = true
            break

        case 'w':
            keys.w.pressed = true
            if(player.velocity.y === 0 ) { player.velocity.y += -22}
            break

        case 's':
            keys.s.pressed = true
            break

        case 'd':
            keys.d.pressed = true
            break
    }
}) 

window.addEventListener('keyup',  (event) => {
    switch(event.key){
        case 'a':
            keys.a.pressed = false
            break

        case 'w':
            keys.w.pressed = false
            break

        case 's':
            keys.s.pressed = false
            break
            
        case 'd':
            keys.d.pressed = false
            break
    }
}) 