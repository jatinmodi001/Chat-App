import React from 'react'
import Modal from 'react-bootstrap/Modal'
import io from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'
import Picker from 'emoji-picker-react';	
class Chat extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {
			name : localStorage.name,
			room : localStorage.room,
			message : '',
			messages : [],
			socket : '',
			pickerToggle : false
		}
	}
	componentDidMount()
	{
		if(!(localStorage.name && localStorage.room))
		{
			localStorage.clear()
			this.props.history.push('/')
		}
		else
		{
			const ENDPOINT = "/"
			let socket = io(ENDPOINT)
			this.setState({socket:socket})
			socket.emit('join',{name : this.state.name,room : this.state.room},(error)=>{
				alert(error)
				localStorage.clear();
				this.props.history.push('/')
			})
			socket.on('message',(message)=>{
						let messages = this.state.messages;
						messages.push(message);
						this.setState({messages : messages})
					})
		
		}
	}
	LogOutHandle = async ()=>{
		await this.state.socket.emit('logout')
		localStorage.clear()
		this.props.history.push('/')
	}
	sendMessage = (event)=>{
		event.preventDefault()

		if(this.state.message)
		{
			this.state.socket.emit('sendMessage',this.state.message,()=>this.setState({message : ''}))
		}
	}
	setMesssage = (event) =>{
		this.setState({message : event.target.value})
	}
	checkMessage = (event)=>{
		if(event.key ==='Enter')
		{
			this.sendMessage(event);
		}
	}
	onEmojiClick = (event,emojiObject)=>{
		let message = this.state.message.concat(emojiObject.emoji)
		this.setState({message:message})
	}
	toggleEmojiPicker = ()=>{
		this.setState({pickerToggle : !this.state.pickerToggle})
	}
	render()
	{
		const show = this.state.pickerToggle ? '' : 'd-none'
		return <Modal.Dialog className="border-0 rounded-0">
  				<Modal.Header closeButton onHide={this.LogOutHandle} className="border-0 text-light text-center bg-primary">
    				<Modal.Title className="text-capitalize">{this.state.room}</Modal.Title>
  				</Modal.Header>
  				<Modal.Body className="border-0 bg-dark text-light">
  					<div className="container m-0 p-0">
  					<ScrollToBottom className="chatBox">
  					{
  						this.state.messages.map((message,index)=>{
  							console.log(message)
  							if(message.user === this.state.name.trim().toLowerCase())
  							{
  								return(
  									<div className="text-light text-right p-0 m-0">		
  										<p key={index}><span className="text rounded p-2 mx-1 bg-info"><b><span className="text-capitalize">You</span> :</b> {message.text}</span></p>
  									</div>
  									)			
  							}
  							if(message.user === 'admin')
  							{
  								return(
  									<div className="text-light text-center">		
  										<p key={index} className="p-2">{message.text}</p>
  									</div>
  									)
  							}
  							return 	<div className="rounded text-dark text-left p-0 m-0">
  								<p key={index}><span className="text rounded p-2 mx-1 bg-light"><b><span className="text-capitalize">{message.user}</span> :</b> {message.text}</span></p>
  								</div>
  						})
  					}	
  					</ScrollToBottom>
  					</div>
  				</Modal.Body>
			  <Modal.Footer className="border-0 p-0 m-0 rounded-0">
			  <div className="input-group p-0 m-0 border-0 rounded-0">
			  		
			  		<input value={this.state.message} className="form-control rounded-0" onChange={this.setMesssage} onKeyPress={this.checkMessage}/>
			  		<div className="input-group-append">
						<button onClick={this.toggleEmojiPicker} className="btn"><i class="far fa-grin"></i></button>
			    		<button className="btn btn-primary border-0 sendButton rounded-0" onClick={this.sendMessage}><i class="fas fa-arrow-right"></i></button>
			    	</div>
			    </div>
			    <div className={show}>
			    	<Picker onEmojiClick={this.onEmojiClick}/>
			    </div>
			  </Modal.Footer>
			</Modal.Dialog>
	}
}

export default  Chat