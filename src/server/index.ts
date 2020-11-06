
import * as createServer from 'socket.io'

import { Node, Text, Mark, Block } from "../shared/nodes"
import Message from "../shared/Message"


const IO_PORT = 3001
const io = createServer()

io.on('connection', socket => {
	console.log("User connected")

	socket.on('operation', (msg: Message) => {
		console.log("Operation : ", msg)
	})

	socket.on('disconnect', () => {
		console.log('User disconnected')
	})
})

io.listen(IO_PORT)
