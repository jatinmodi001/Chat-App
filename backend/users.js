const users = []

const addUser = ({id,name,room})=>{

	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find((user)=>{
		return user.room == room && user.name == name
	})

	if(existingUser)
	{
		console.log("EXISTS ",existingUser)
		return {error : 'User Already Exists'}
	}
	const user = {id, name, room}
	users.push(user)
	return {user}
}

const removeUser = (id)=>{
	const index = users.findIndex((user)=> user.id == id)

	if(index != -1)
	{
		return users.splice(index,1)[0];
	}
}

const getUser = (id)=>{
	return users.find((user)=> user.id == id);
}

const getUsersInRoom = (room) =>{
	return users.filter((user)=> 
	{
		if(user.room == room)
		{
			return user;
		}
	})
}

module.exports = {addUser, removeUser, getUser, getUsersInRoom}