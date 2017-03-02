/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";
import {Grid, Row, Col, Image, Popover, OverlayTrigger, Button} from "react-bootstrap";
import "../../src/CSS/ItemList.css";
import ds from "../../src/Services/DatabaseService";

export default class ItemList extends Component {
    render() {
        return (
          <div className="col-md-3 col-xs-12">
                          <Image className="itemPreview" src="/img/placeholderT.jpg" circle />
                        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom"
                                        overlay={<Popover id="popover-trigger-hover-focus" title="Popover bottom">
                                            <strong>Holy guacamole!</strong> Check this info.
                                        </Popover>}>
                            <Button className="" id="itemButton"> {ds.getName(1)} </Button>
                        </OverlayTrigger>
          </div>
        );
    }
}