import React from "react";
import PropTypes from 'prop-types'; // To set data type for a property, we specify using Prop look at the bottom of this file

export class EventsInReact extends React.Component {
	// Props is for passing data from outside the components
	// State is for changing the state of this component
	// State is to rerendering the values onthe page
	
	constructor(props){
		console.log("Topic = Events in React (Calling Constructor)");
		super();
		
		this.state = {
			age: props.initialAge,
			status: 0
		};
		
		{/* for ES6
		setTimeOut(()=>{this.setState({status: 0}); }.bind(this), 2000);
		*/}
		
		setTimeout(function() { this.state.status==0 ? this.setState({status:1}):this.setState({status:0}); }.bind(this), 3000);
		
		
		console.log("Initially age is "+this.state.age);
	}
	
	fn_ButtonClick(){
		
		this.setState({
			age: this.state.age + 3
			
		});
		/* Note: Eventhough the value has been assigned to state.age using setState()
		 but the change will effect after executing this block of code
		 This is why you will see different ages in console and the page after rendered
		 However, the best way for assigning value is to use
		 	this.state.age += 3;
		 before calling the setState() and then in setState() 
		 	age: this.state.age
		 */
		
		console.log("New Age is "+this.state.age+" props age is "+this.props.initialAge);
		
		// Use of Ternary operator
		setTimeout(function() { this.state.status==0 ? this.setState({status:1}):this.setState({status:0}); }.bind(this), 3000);
		
	}

	render() {    	
		
		return (
            <div className="container">
               <div className="row">
                	<h1>Events In ReactJS</h1>
               </div>
               
               <hr/>

               <div>
               		<p>Name: {this.props.name} </p>
               		<p>Age:{this.state.age} </p>
               		<p>status: {this.state.status}</p>
               		<br/>
                    {
               		/* 
                     * Events in react can be triggered as follows 
                     * .bind is used to trigger this function only within this component
                     * otherwise it will throw an exception
                     */
                    }
                    <p>
                    <button onClick={this.fn_ButtonClick.bind(this)} className="btn"> Click Me </button>
               		</p>
                    or
                    <p>
               		<button onClick={()=>this.fn_ButtonClick()} className="btn"> Click Me Other</button>
               		</p>
               </div>
               
            </div>
        );

    }
}


EventsInReact.propTypes = {
	name: PropTypes.string,
	initialAge: PropTypes.number
};

