import React from "react";
import PropTypes from 'prop-types'; // to make sure the object type we want to
									// use for, we specify using Prop

export class ChangeInputText extends React.Component {
	
	constructor(){
		super();
		
		this.state = {
				nameInp:"Initial input value"
		};
		
	}
	
	onHandleChange(event){
		console.log("calling function on change");
		
		this.setState({
			nameInp: event.target.value
		});
	}
	
	
	render() {
		return (
			<div>
				<input type="text" value={this.state.nameInp}  size="90"
					onChange = { (event) => this.onHandleChange(event) }  />
				<p>
				{this.state.nameInp}
				</p>
			</div>
		);
	}
	
	
}