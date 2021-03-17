import '../css/index.css'
import {Connection} from './networking'
import {Controller} from './controller'
import {Renderer} from './renderer'

const connection = new Connection()
const controller = new Controller()
const renderer = new Renderer()

renderer.drawRect({x: 100, y: 100, width: 200, height: 100})

let t = setInterval(() => {
  console.log(controller.getInput())
}, 1000/60)