(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{106:function(e,t){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(10),r=a.n(s),c=(a(72),a(14)),l=a(15),m=a(17),i=a(16),u=a(18),g=a(63),p=a(12),h=(a(73),a(74),a(7)),d=a(66),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).setName=function(e){a.setState({name:e.target.value})},a.setRoom=function(e){a.setState({room:e.target.value})},a.roomHandle=function(){""===a.state.name||""===a.state.room?alert("Enter Correct Details"):(localStorage.name=a.state.name,localStorage.room=a.state.room,a.props.history.push("/chat"))},a.state={name:"",room:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){localStorage.name&&localStorage.room&&this.props.history.push("/chat")}},{key:"render",value:function(){return o.a.createElement(h.a.Dialog,null,o.a.createElement(h.a.Header,null,o.a.createElement(h.a.Title,null,"Join")),o.a.createElement(h.a.Body,null,o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Name : "),o.a.createElement("input",{className:"form-control",onChange:this.setName})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Room : "),o.a.createElement("input",{className:"form-control",onChange:this.setRoom})))),o.a.createElement(h.a.Footer,null,o.a.createElement(d.a,{variant:"primary",onClick:this.roomHandle},"Join Room")))}}]),t}(o.a.Component),f=a(33),b=a.n(f),k=a(59),v=a(60),N=a.n(v),x=a(61),j=a.n(x),y=a(62),S=a.n(y),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).LogOutHandle=Object(k.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.state.socket.emit("logout");case 2:localStorage.clear(),a.props.history.push("/");case 4:case"end":return e.stop()}}),e)}))),a.sendMessage=function(e){e.preventDefault(),a.state.message&&a.state.socket.emit("sendMessage",a.state.message,(function(){return a.setState({message:""})}))},a.setMesssage=function(e){a.setState({message:e.target.value})},a.checkMessage=function(e){"Enter"===e.key&&a.sendMessage(e)},a.onEmojiClick=function(e,t){var n=a.state.message.concat(t.emoji);a.setState({message:n})},a.toggleEmojiPicker=function(){a.setState({pickerToggle:!a.state.pickerToggle})},a.state={name:localStorage.name,room:localStorage.room,message:"",messages:[],socket:"",pickerToggle:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.name&&localStorage.room){var t=N()("http://localhost:5000");this.setState({socket:t}),t.emit("join",{name:this.state.name,room:this.state.room},(function(t){alert(t),localStorage.clear(),e.props.history.push("/")})),t.on("message",(function(t){var a=e.state.messages;a.push(t),e.setState({messages:a})}))}else localStorage.clear(),this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=this.state.pickerToggle?"":"d-none";return o.a.createElement(h.a.Dialog,{className:"border-0 rounded-0"},o.a.createElement(h.a.Header,{closeButton:!0,onHide:this.LogOutHandle,className:"border-0 text-light text-center bg-primary"},o.a.createElement(h.a.Title,{className:"text-capitalize"},this.state.room)),o.a.createElement(h.a.Body,{className:"border-0 bg-dark text-light"},o.a.createElement("div",{className:"container m-0 p-0"},o.a.createElement(j.a,{className:"chatBox"},this.state.messages.map((function(t,a){return console.log(t),t.user===e.state.name.trim().toLowerCase()?o.a.createElement("div",{className:"text-light text-right p-0 m-0"},o.a.createElement("p",{key:a},o.a.createElement("span",{className:"text rounded p-2 mx-1 bg-info"},o.a.createElement("b",null,o.a.createElement("span",{className:"text-capitalize"},"You")," :")," ",t.text))):"admin"===t.user?o.a.createElement("div",{className:"text-light text-center"},o.a.createElement("p",{key:a,className:"p-2"},t.text)):o.a.createElement("div",{className:"rounded text-dark text-left p-0 m-0"},o.a.createElement("p",{key:a},o.a.createElement("span",{className:"text rounded p-2 mx-1 bg-light"},o.a.createElement("b",null,o.a.createElement("span",{className:"text-capitalize"},t.user)," :")," ",t.text)))}))))),o.a.createElement(h.a.Footer,{className:"border-0 p-0 m-0 rounded-0"},o.a.createElement("div",{className:"input-group p-0 m-0 border-0 rounded-0"},o.a.createElement("input",{value:this.state.message,className:"form-control rounded-0",onChange:this.setMesssage,onKeyPress:this.checkMessage}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{onClick:this.toggleEmojiPicker,className:"btn"},o.a.createElement("i",{class:"far fa-grin"})),o.a.createElement("button",{className:"btn btn-primary border-0 sendButton rounded-0",onClick:this.sendMessage},o.a.createElement("i",{class:"fas fa-arrow-right"})))),o.a.createElement("div",{className:t},o.a.createElement(S.a,{onEmojiClick:this.onEmojiClick}))))}}]),t}(o.a.Component),C=(a(142),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement(p.a,{exact:!0,path:"/",component:E}),o.a.createElement(p.a,{exact:!0,path:"/chat",component:O}))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){e.exports=a(145)},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.91b9a4fe.chunk.js.map