//An example of react component

import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-12 col-xs-offset-1">
                        <h1>hello World..11.!</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-xs-offset-1">
                        <Header />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-xs-offset-1">
                        <Home />
                    </div>
                </div>
            </div>

        );

    }
}
render( <App />, window.document.getElementById( "app" ) );

//console.log("Application Renderred");