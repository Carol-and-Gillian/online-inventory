/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";
import ItemList from "./ItemList";

export default class Apparel extends Component {
    render() {
        return (
            <div>
                <ItemList/>
                <p>This apparel item {this.props.params.id}</p>
            </div>
        );
    }
}