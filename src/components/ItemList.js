/**
 * Created by gillianyue on 2/15/17.
 */
import React, {Component} from "react";
import {Grid, Row, Col, Image} from "react-bootstrap";
import "../../src/CSS/ItemList.css";

export default class ItemList extends Component {
    render() {
        return (
          <div>
              <Grid>
                  <Row>
                      <Col xs={6} md={4}>
                          <Image src="/img/placeholderT.jpg" circle />
                      </Col>

                  </Row>
              </Grid>
          </div>
        );
    }
}