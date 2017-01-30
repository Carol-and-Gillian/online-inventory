/**
 * Created by gillianyue on 1/30/17.
 */
import React, { Component } from 'react';


class itemPlaceHolder extends Component{
    render(){
    return(
<div className="row placeholders">
    <div className="col-xs-6 col-sm-3 placeholder">
        <img src="http://cdn.shopify.com/s/files/1/0277/0693/products/apparel-cosmos-tee-1_large.jpg?v=1480339965"
             width="200" height="200" className="img-responsive" alt="" />
            <h4>Item</h4>
            <span className="text-muted">Short Description for Item</span>
    </div>
</div>
        );
        }
        }

        export default itemPlaceHolder;