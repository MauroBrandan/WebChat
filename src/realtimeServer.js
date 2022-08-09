module.exports = (httpServer) => {
	const { Server, Socket } = require('socket.io')
	const io = new Server(httpServer)

	io.on('connection', (socket) => {
		const cookie = socket.handshake.headers.cookie
		const user = cookie.split('=').pop()

		socket.on('message', (message) => {
			io.emit('message', {
				user,
				message,
			})
		})
	})
}
