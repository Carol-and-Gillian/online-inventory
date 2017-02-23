/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";

export default class ItemList extends Component {
    render() {
        return (
          <div>
          </div>
        );
    }
}

const item = (
    <Grid>
        <Row>
            <Col xs={6} md={4}>
                <Image src="../../img/placeholderT.jpg" circle />
            </Col>
            <Col xs={6} md={4}>
                <Image src="../../img/placeholderT.jpg" thumbnail />
            </Col>
        </Row>
    </Grid>
);
