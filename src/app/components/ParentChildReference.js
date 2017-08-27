import React from "react";
import PropTypes from 'prop-types'; //to make sure the object type we want to use for, we specify using Prop

export class ParentChildReference extends React.Component {
	
	constructor(props){
		super();
		this.state = {
				myText: props.inputText
		};
	}
	
	changeText(){
		this.props.changeText(this.state.myText);
	}
	
	onHandleChange(){
		this.setState({
			myText: event.target.value
		});
	}
	
	render() {

    	return (
            <div className="container">
            	<h1>Communicating Parent Child!</h1>
            	
            	<button onClick={this.props.greet}>Greet Me</button> {/*This will call the parent function*/}
            	<input type="text" value={this.state.myText} 
            		onChange = { (event) => this.onHandleChange(event) }  />
            	<button onClick={this.changeText.bind(this)}>Change MyComp Text</button>
            </div>
        );

    }
}


ParentChildReference.propTypes = {
	greet: PropTypes.func,
	inputText: PropTypes.string
};

