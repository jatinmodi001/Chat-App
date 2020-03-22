const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')
const path = require('path')
const app = express()
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users.js')
const server = http.createServer(app)

const io = socketio(server)
const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
io.on('connection',(socket)=>{
	socket.on('disconnect',async ()=>{
		const user = getUser(socket.id);
		if(user)
		{
			await socket.broadcast.to(user.room).emit('message',{user : 'admin', text : `${user.name} has left ! `})
			removeUser(socket.id)
		}
	})
	socket.on('logout',async ()=>{
		const user = getUser(socket.id);
		if(user)
		{
			await socket.broadcast.to(user.room).emit('message',{user : 'admin', text : `${user.name} has left ! `})
			removeUser(socket.id)	
		}
	})
	socket.on('join',({name,room},callback)=>{
		const {error,user} = addUser({id : socket.id, name, room})
		if(error)
		{
			return callback(error)
		}
		else{
			socket.emit('message',{user : 'admin', text: `${user.name}, welcome to the room ${user.room}`})
			socket.broadcast.to(user.room).emit('message',{user : 'admin', text : `${user.name} has joined ! `})

			socket.join(user.room)

		}
	})

	socket.on('sendMessage',(message, callback)=>{
		const user = getUser(socket.id);

		io.to(user.room).emit('message',{user : user.name,text : message})

		callback();
	})
})

server.listen(port,(req,res)=>{
	console.log('Listening at port : '+port)
});