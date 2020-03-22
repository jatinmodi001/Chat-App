import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class Join extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {
			name : '',
			room : ''
		}
	}
	componentDidMount()
	{
		if(localStorage.name && localStorage.room)
		{
			this.props.history.push('/chat')
		}
	}
	setName = (event)=>{
		this.setState({name : event.target.value})
	}
	setRoom = (event)=>{
		this.setState({room : event.target.value})
	}
	roomHandle = ()=>{
		if(this.state.name === '' || this.state.room === '')
		{
			alert('Enter Correct Details')
		}
		else{
			localStorage.name = this.state.name;
			localStorage.room = this.state.room;
			this.props.history.push('/chat')
		}
	}
	render()
	{
		return <Modal.Dialog>
  				<Modal.Header>
    				<Modal.Title>Join</Modal.Title>
  				</Modal.Header>

  				<Modal.Body>
				  <form>
				  	<div className="form-group">
				  		<label>Name : </label>
				  		<input className="form-control" onChange={this.setName}/>
				  	</div>
				  	<div className="form-group">
				  		<label>Room : </label>
				  		<input className="form-control" onChange={this.setRoom}/>
				  	</div>
				  </form>
  				</Modal.Body>
			  <Modal.Footer>
			    <Button variant="primary" onClick={this.roomHandle}>Join Room</Button>
			  </Modal.Footer>
			</Modal.Dialog>
	}
}

export default Join