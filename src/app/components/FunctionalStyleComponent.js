import React from "react";
import PropTypes from 'prop-types';
/*
 * For detail understanding
 * https://javascriptplayground.com/blog/2017/03/functional-stateless-components-react/
 * or
 * https://medium.com/@mirkomariani/functional-components-with-react-stateless-functions-and-ramda-e83e54fcd86b
 */
const FunctionalStyleComponent = ({inp}) => {
	const sayHi = (event)=>{
		alert("Hi {inp}");
	};
	
	console.log("...."+inp);
	
	return (
			
		<div>
			<a href="#" onClick={sayHi}>say Hi</a>
			<p>The logged in user is: {inp}</p>
		</div>
	);
	
}

FunctionalStyleComponent.propTypes = {
	inp: PropTypes.string.isRequired		
};

export default FunctionalStyleComponent;