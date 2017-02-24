/**
 * Created by gillianyue on 2/24/17.
 */

import React, {Component} from "react";
import {Jumbotron, Carousel} from "react-bootstrap";
import '../../src/CSS/Carousel.css';

export default class MainPageComponents extends Component{
    render(){
    return(
        <div>
        <Jumbotron>
            <h1>Welcome to St. Mark's School's Bookstore!!</h1>
            <p>Here, you can check out the products that are sold in the bookstore, find out information,
                and even compare the products to make plans for your next visit!</p>
        </Jumbotron>
            
            <Carousel>
                <Carousel.Item>
                   <center> <img height={500}
                                 alt="500x500" src="/img/sweatshirt.png"/> </center>
                    <Carousel.Caption>
                        <h3>Find Awesome Apparels.</h3>
                        <p>St. Mark's Bookstore provides the most comfy and beautifully manufacture
                            clothing possible!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center>   <img height={500} alt="500" src="/img/snacks.png"/>
                    </center>
                    <Carousel.Caption>
                        <h3>Explore a Variety of Tastiness.</h3>
                        <p>From protein bars to gummy bears, discover every snack imaginable! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center>    <img height={500} alt="500" src="/img/stationary.jpg"/>
                    </center>
                    <Carousel.Caption>
                        <h3>Store up Pens and Erasers!</h3>
                        <p>Prepare the academic battles with the most popular stationary on market!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center>     <img height={500} alt="500" src="/img/textbook.jpg"/>
                    </center>
                    <Carousel.Caption>
                        <h3>Find your textbook!</h3>
                        <p>Here are all the books you need for class</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <center>    <img height={500} alt="500" src="/img/lions.png"/>
                    </center>
                    <Carousel.Caption>
                        <h3>Other fun things to buy</h3>
                        <p>There are the cute SM Lions!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
}


