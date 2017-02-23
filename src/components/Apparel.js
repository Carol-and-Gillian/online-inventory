/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";
import {LinkContainer} from "react-router-bootstrap";
import ItemList from "./ItemList";

export default class Apparel extends Component {
    render() {
        return (
            <div>
                <ItemList/>
            </div>
        );
    }
}