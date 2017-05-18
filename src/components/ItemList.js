/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";
import {Grid, Col, Row, Image, Popover, OverlayTrigger, Button} from "react-bootstrap";
import "../../src/CSS/ItemList.css";
import ds from "../../src/Services/DatabaseService";
import {LinkContainer} from "react-router-bootstrap";

export default class ItemList extends Component {
    render() {
        return (
<div>
          <Col xs={6} md={3} id="item">
              <Row>
                          <Image className="itemPreview" src={ds.getImageRoute(this.props.itemNum)} circle />
              </Row>
              <Row>

                        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom"
                                        overlay={<Popover id="popover-trigger-hover-focus"
                                                          title={'Price: $'+ ds.getPrice(this.props.itemNum)}>
                                            <strong>  </strong> {ds.getDescription(this.props.itemNum)}
                                        </Popover>}>
                            <LinkContainer to={ds.getName(this.props.itemNum)}>
                            <Button id="itemButton">
                                {ds.getName(this.props.itemNum)} </Button>
                            </LinkContainer>
                        </OverlayTrigger>
              </Row>
          </Col>
    {this.props.children}
</div>
        );
    }
}
