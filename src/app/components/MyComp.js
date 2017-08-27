import React from "react";
import PropTypes from 'prop-types'; //to make sure the object type we want to use for, we specify using Prop

export class MyComp extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-xs-offset-1">
                        <h3>MyComp!</h3>
                        <p>{this.props.myCompText}</p>
                    </div>
                </div>
            </div>
        );

    }
}


MyComp.propTypes = {
		myCompText: PropTypes.string
};
