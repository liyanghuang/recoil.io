const express = require('express')
const { argv } = require('process')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static('public'))
app.use(express.static('dist'))

let xpos = 100
let ypos = 100

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.emit("draw", {x: xpos, y: ypos})
    socket.on('move', (arg) =>{
        if(arg === 'w'){
            ypos -= 10;
            socket.emit("draw", {x: xpos, y:ypos});
        }
        if(arg == 'a'){
            xpos -= 10;
            socket.emit("draw", {x: xpos, y:ypos});
        }
        if(arg == 's'){
            ypos += 10;
            socket.emit("draw", {x: xpos, y:ypos});
        }
        if(arg == 'd'){
            xpos += 10;
            socket.emit("draw", {x: xpos, y:ypos});
        }
    })
})

http.listen(3000, () => {
    console.log('listening on port 3000')
})