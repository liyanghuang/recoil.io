import io from 'socket.io-client'

class Connection {
    constructor(){
        this.socket = io()
        this.socket.on('connect', ()=> {
            console.log(`connected with id: ${this.socket.id}`);
        })
    }

    // packetData should include:
    // id: connectionID
    // time: timestamp
    // data: {
    //    wdown: true or false
    //    adown: true or false
    //    sown: true or false
    //    ddown: true or false
    //    spacedown: true or false
    // }
    sendPacket(data){
        this.socket.emit('clientInput', {
            id: this.socket.id,
            time: 0,
            inputData: data,
        })
    }

    // add a callback to the socket
    addCallback(name, callback){
        this.socket.on(name, (args) => {callback(args)})
    }
}


export {Connection}