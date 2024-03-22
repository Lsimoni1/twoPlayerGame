const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 20 //1280
canvas.height = 64 * 12 //768

const keys = {
    'a': {
        pressed: false,
    },
    'w': {
        pressed: false,
    },
    's': {
        pressed: false,
    },
    'd': {
        pressed: false,
    }

}

// const testMap = new Image()
// testMap.src = "testmap.png"



//"test map" for collisions and movement
function drawMap() {
    //canvas
    c.fillStyle = 'white'
    c.fillRect(0, 0 , canvas.width, canvas.height)

    // //ground
    // c.fillStyle= 'blue'
    // c.fillRect(0, 640, canvas.width, canvas.height)

    // //side areas
    // c.fillRect(0, 512, 64, 128)
    // c.fillRect(64, 576, 64, 64)
    // c.fillRect(1216, 512, 64, 128)
    // c.fillRect(1152, 576, 64, 64)

    // //platform
    // c.fillRect(512, 448, 256, 64)

    // c.drawImage(testMap, 0, 0)
}

const player = new Player

function animate() {
    if(keys.a.pressed) player.velocity.x = -5
    else if(keys.d.pressed) player.velocity.x = 5
    else player.velocity.x = 0

    // if(keys.w.pressed && player.velocity.y <= 0) player.velocity.y = -5
    // else player.velocity.y += player.gravity
    
    drawMap()
    parse2DMap(testCollisions)
    player.draw()
    player.update(collisionCollection)

    window.requestAnimationFrame(animate)
}

animate()
