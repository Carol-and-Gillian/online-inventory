/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";
import ItemList from "./ItemList";
import {Row} from "react-bootstrap";
import RenderContainer from "../Container/RenderContainer";

export default class Apparel extends Component {


    render() {
        return (
            <div>
                <Row>
                <ItemList itemNum={1}/>
                <ItemList itemNum={2}/>
                    <ItemList itemNum={3}/>
                    <ItemList itemNum={4}/>
                </Row>
                    <Row>
                     <ItemList itemNum={5}/>
                    </Row>

            </div>
        );
    }
}