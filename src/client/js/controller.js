class Controller{

    constructor(){

        // controller keeps track of key up and down state
        this.wDown = false
        this.aDown = false
        this.sDown = false
        this.dDown = false
        // for space and w, we keep track of whether it has been pressed since the
        // last time we check for input
        this.jumpPressed = false

        document.addEventListener('keydown', (e) => {
            if(e.code === 'KeyW'){
                this.wDown = true
            }
            if(e.code === 'KeyA'){
                this.aDown = true
            }
            if(e.code === 'KeyS'){
                this.sDown = true
            }
            if(e.code === 'KeyD'){
                this.dDown = true
            }
            if(e.code === 'Space'){
                this.jumpPressed = true
            }
        })
        document.addEventListener('keyup', (e) => {
            if(e.code === 'KeyW'){
                this.wDown = false
            }
            if(e.code === 'KeyA'){
                this.aDown = false
            }
            if(e.code === 'KeyS'){
                this.sDown = false
            }
            if(e.code === 'KeyD'){
                this.dDown = false
            }
        })
    }

    getInput(){
        const tempJump = this.jumpPressed
        this.jumpPressed = false
        return {
            wDown: this.wDown,
            aDown: this.aDown,
            sDown: this.sDown,
            dDown: this.dDown,
            jumpPressed: tempJump,
        }
    }
}

export {Controller}