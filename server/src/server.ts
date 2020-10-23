
import { Node, Text, Mark, Block } from "../../shared/nodes"
import * as http from 'http'
import * as createIo from 'socket.io'
import * as polka from 'polka'

const IO_PORT = 3001

// const server = http.createServer()
const io = createIo()
// const app = polka({server})

io.on('connection', socket => {
	console.log("User connected")
	socket.on('disconnect', () => {
		console.log('User disconnected')
	})
})

io.listen(IO_PORT)

// app.get('/', (req, res) => {
// 	res.end("This is the index page of the socket.io server")
// })

// app.listen(IO_PORT, err => {
// 	if (err) throw err
// 	console.log(`> Running on localhost:${IO_PORT}`)
// })