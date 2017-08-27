import React from "react";
//props are available in stateless components
export const StatelessComp = (props) => {
     {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-xs-offset-1">
                        <h1>This is a Stateless component example.!</h1>
                        <a href="#">{props.homeLink}</a>
                    </div>
                </div>
            </div>
        );

    }
}

