//An example of react component as Class Components

import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { EventsInReact } from "./components/EventsInReact";
import FunctionalStyleComponent  from "./components/FunctionalStyleComponent";


class App extends React.Component {
    render() {
    	
    	//Creating a user object
    	var user = {
    		name: "Anna",
    		hobbies: ["Sports", "Movies", "Reading"] 
    	}
    	
        return (
        	 <div className="container">
        	 {/* This is the main div and all components must be in one single div */} 
        	 
             
                {/* ******** Rendering HTML ********** 
                
                <div className="row">
                    <h1>hello World..11.!</h1>
                </div>
                */}

                
                
                {/* ********* RENDERING A COMPONENT OF REACTJS **********
                 * The child component will be pulled here.  The below code
                 * will pull the Header.js
                 * Firstly import { EventsInReact } from "./components/EventsInReact";
                
                <div className="row">
                    <Header /> //Referencing Custom Component name Header.js in src\app\components
                </div>
                */}
                
                
                
                {/* ********** PROPS and PropTypes***********
                 * Passing values to components
                
                <div className="row">
                    <div className="col-xs-12 col-xs-offset-1">
                        <Home name={"Halen"} age={24} user={user}>
                        	<p>this is a pragraph passed from another js</p>
                        </Home>
                        <Home name={"Raja"} age={25} user={user} />
                    </div>
                </div>
                */}
                
                
				
				{/* ********** Events and State of the components ************
				 * the values of properties name and intialAge will be passed 
				 * to EventsInReact component that will be handled through props 
				 * the best way is to call the constructor and set to 
				 * the component's variables
				
				<div>
					<EventsInReact name={"Halen"} initialAge={22} />
				</div>
				*/}
                
				<div>
					<FunctionalStyleComponent inp="Raja" />
				</div>
				
                
            </div>

        );

    }
}
render( <App />, window.document.getElementById( "app" ) );

//console.log("Application Renderred");