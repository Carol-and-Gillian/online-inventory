/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";

export default class Apparel extends Component {
    render() {
        return (
            <div className="container">
                <p>I am the apparel page and my ID is {this.props.params.id}</p>
            </div>
        );
    }
}