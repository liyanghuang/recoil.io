import {debounce} from 'throttle-debounce'

class Renderer{
    constructor(){
        this.canvas = document.getElementById('game-canvas')
        this.cxt = this.canvas.getContext('2d')
        this.setDim()
        window.addEventListener('resize', debounce(100, this.setDim))
    }

    drawRect(rect){
        this.cxt.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }

    // have to set dim like this b/c the window resize doesn't work with a class method
    setDim(){
        const canvas = document.getElementById('game-canvas')
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

}


export {Renderer}