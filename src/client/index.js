import io from 'socket.io-client'
import './css/index.css'

const socket = io();

socket.on("connect", () => {
  console.log(socket.id);
});

socket.on("draw", (arg) => {
  render(arg)
})

const canvas = document.getElementById('game-canvas');
const cxt = canvas.getContext('2d');
setDim();

function setDim(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', setDim)

document.addEventListener('keydown', (e) => {
  if(e.code === "KeyW"){
    socket.emit('move', 'w')
  }
  if(e.code === "KeyA"){
    socket.emit('move', 'a')
  }
  if(e.code === "KeyS"){
    socket.emit('move', 's')
  }
  if(e.code === "KeyD"){
    socket.emit('move', 'd')
  }

})

function render(position){
  cxt.clearRect(0, 0, canvas.width, canvas.height);
  cxt.fillRect(position.x, position.y, 50, 50)
}