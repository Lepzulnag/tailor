
import { Node, Text, Mark, Block } from "./Node"
import http from 'http'
import socketIo from 'socket.io'
import polka from 'polka'

const IO_PORT = 3001

const server = http.createServer()
const io = socketIo(server)
const app = polka({server})

io.on('connection', socket => {
	console.log("Connected")
})

app.get('/', (req, res) => {
	res.end("This is the index page of the socket.io server")
})

app.listen(IO_PORT, err => {
	if (err) throw err
	console.log(`> Running on localhost:${IO_PORT}`)
})