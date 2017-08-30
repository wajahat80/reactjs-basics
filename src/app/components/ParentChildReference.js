import React from "react";
import PropTypes from 'prop-types'; //to make sure the object type we want to use for, we specify using Prop

export class ParentChildReference extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
				myText: props.inputText
		};
	}
	
	changeText(){
		this.props.changeText(this.state.myText);
	}
	
	onHandleChange(event){
		console.log("Triggered onHandleChange"+event.target.value);
		this.setState({
			myText: event.target.value
		});
		console.log("..."+this.state.myText);
	}
	
	render() {

    	return (
            <div className="container">
            	<h1>Communicating Parent Child!</h1>
            	
            	<p>
	            	<button onClick={this.props.greet}>Greet Me</button> {/*This will call the parent function*/}
            	</p>
            	
            	<p>
	            	Input Text: <input type="text" value={this.state.myText} autoFocus="autofocus"  size="90"
	            		onChange = { (event) => this.onHandleChange(event) }  />
            	</p>
            	
            	<p>
	            	<button onClick={this.changeText.bind(this)}>Change Input Text</button>
            	</p>
            </div>
        );

    }
}


ParentChildReference.propTypes = {
	greet: PropTypes.func,
	inputText: PropTypes.string,
	changeMyCompText: PropTypes.func
};

