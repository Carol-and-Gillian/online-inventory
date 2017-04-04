import React, {Component} from 'react';
import THREE, {Vector3,JSONLoader} from 'three';
import ReactTHREE, {Renderer, Scene, PerspectiveCamera, Mesh} from 'react-three';

export default class ThreeTest extends Component {
    render() {
        var aspectratio = this.props.width / this.props.height;
        var cameraprops = {
            fov: 75,
            aspect: aspectratio,
            near: 1,
            far: 10,
            position: new Vector3(0, 3.5, 5),
            lookat: new Vector3(0, 0, 0)
        };
        var monkey;
        var loader = new JSONLoader();
        loader.load('./monkey.json', (geometry) => monkey = new Mesh(geometry));

        return <Renderer width={this.props.width} height={this.props.height}>
            <Scene width={this.props.width} height={this.props.height} camera="maincamera">
                <PerspectiveCamera name="maincamera" {...cameraprops} />
                <Mesh {...monkey.data} />
            </Scene>
        </Renderer>

    }

}