/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";
import ItemList from "./ItemList";

export default class Apparel extends Component {
    render() {
        return (
            <div>
                <ItemList id="1"/>
                <ItemList id="2"/>
                <p>This apparel item {this.props.params.id}</p>
            </div>
        );
    }
}