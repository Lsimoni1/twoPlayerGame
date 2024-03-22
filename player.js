class Player {
    constructor() {
        this.position = {
            x: 200,
            y: 500,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = 64
        this.height = 64

        this.sides = {
            bottom: this.position.y + this.height
        }

        this.gravity = 1
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect( this.position.x, this.position.y, this.width, this.height)
    }

    update(array) {
        this.position.x += this.velocity.x

        this.testHorizontalCollisions(array)

        this.velocity.y += this.gravity
        this.position.y += this.velocity.y

        this.testVerticalCollisions(array)

    }

    testHorizontalCollisions(array) {
        for(let i = 0; i < array.length ; i++) {
            const collisionBlock = array[i]

            if( this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height ){
                
                if(this.velocity.x > 0) {
                    this.position.x = collisionBlock.position.x - 0.5 - this.width
                    break
                }
    
                if(this.velocity.x < 0) {
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.5
                    break
                }   
            }      
        }
    }
    
    testVerticalCollisions(array) {
        for(let i = 0; i < array.length ; i++) {
            const collisionBlock = array[i]
    
            if( this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height ){
                
                if(this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.5
                    break
                }
    
                if(this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.5
                    break
                }   
            }      
        }
    }

     /* 
    MIGHT NEED TO ADD COLLISION WITH BORDER, WILL DEPEND ON LEVEL DESIGN
    */
}

