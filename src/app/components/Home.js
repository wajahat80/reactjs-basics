import React from "react";
import PropTypes from 'prop-types'; //to make sure the object type we want to use for, we specify using Prop

export class Home extends React.Component {
    render() {
    	var sometext = "This is a variable declared";
    	
    	// logging the properties
    	console.log(this.props);
        
    	return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-xs-offset-1">
                        <h1>1+1 = {1+1} is a Home component.!</h1>
                        <p>Retrieving from property</p>
                       
                       <p>Your name : {this.props.name}</p>
                       <p>Your age : {this.props.age}</p>
                         <p>Declared variable: <b>{sometext}</b></p>
                        
                         <p>User Object => Name: {this.props.user.name}</p>
                        
                         <ul>
                         	{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                         </ul>
                    </div>
                    <hr/>
                    {this.props.children}
                </div>
            </div>
        );

    }
}


Home.propTypes = {
		name: PropTypes.string,
		age: PropTypes.number,
		user: PropTypes.object,
		children: PropTypes.element.isRequired
};

