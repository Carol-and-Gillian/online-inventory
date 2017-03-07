/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";
import {Image, Popover, OverlayTrigger, Button} from "react-bootstrap";
import "../../src/CSS/ItemList.css";
import ds from "../../src/Services/DatabaseService";



export default class ItemList extends Component {
    render() {
       // let myID = ;
        return (
          <div className="col-md-2 col-xs-12" id="item">
                          <Image className="itemPreview" src="/img/placeholderT.jpg" circle />

                        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom"
                                        overlay={<Popover id="popover-trigger-hover-focus"
                                                          title={'Price: $'+ ds.getPrice(1)}>
                                            <strong>  </strong> {ds.getDescription()}
                                        </Popover>}>
                            <Button id="itemButton"> {ds.getName()} </Button>
                        </OverlayTrigger>

          </div>
        );
    }
}
