
import '@types/socket.io-client/index.d'

let socket = io.connect('http://localhost:3001')

socket.emit('operation', 'Hey :DD')

console.log("Helloooow from main.ts")