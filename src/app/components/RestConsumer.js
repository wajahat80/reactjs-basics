import React from "react";
import PropTypes from 'prop-types'; // to make sure the object type we want to
									// use for, we specify using Prop
import axios from 'axios';

export class RestConsumer extends React.Component {
	
	constructor(){
		super();
		this.state = {emp: ""};
		
	}
	
	handleClickCallService(){
		var axios = require('axios');
		console.log("handleClickCallService...");
		
		/*const BASE_URL = 'http://localhost:8080';
		const url = BASE_URL+'/spring-jersey-rest/api/employee';
		axios.get(url).then(response => response.data);*/
		
		const apiConfig = axios.create({
			  baseURL: 'http://localhost:8080',
			  timeout: 10000,
			  withCredentials: true,
			  //transformRequest: [(data) => JSON.stringify(data.data)],
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			    'Access-Control-Allow-Origin': 'Authentication',
			    'Access-Control-Allow-Credentials': 'true'
			  }
			});
		
		axios.get('http://localhost:8080/spring-jersey-rest/api/employee', apiConfig)
		  .then(function (response) {
		    console.log(response);
		    console.log(response.data); // ex.: { user: 'Your User'}
		    console.log(response.status); // ex.: 200
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		
		//console.log(myApi);
	}
	
	render() {
		return (
				
			<div>
				<p>
					Please Click to button
				</p>
				<input type="button" value="Call Service"  size="90"
					onClick = {this.handleClickCallService.bind()}  />
				
			</div>
		);
	}
	
	
}