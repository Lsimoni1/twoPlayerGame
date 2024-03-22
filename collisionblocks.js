class collisionBlock {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        }
        this.width = 64
        this.height = 64
    }

    drawCollision() {
        c.fillStyle = 'rgba(0, 255, 0, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}