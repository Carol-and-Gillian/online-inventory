/**
 * Created by gillianyue on 4/11/17.
 */
import React, { Component, PropTypes, } from 'react';
import React3 from 'react-three-renderer';
import { Vector3, Euler, Geometry, DoubleSide, } from 'three';


import Monkey from './monkey';


export default class Game extends Component {

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        cameraPosition: PropTypes.instanceOf( Vector3 ).isRequired,
        lookAt: PropTypes.instanceOf( Vector3 ).isRequired,
        geometry: PropTypes.instanceOf( Geometry ).isRequired,
        monkeyPosition: PropTypes.instanceOf( Vector3 ).isRequired,
        monkeyRotation: PropTypes.instanceOf( Euler ).isRequired,
    }

    render() {

        const {
            width, height, cameraPosition, geometry, lookAt, monkeyPosition,
            monkeyRotation
        } = this.props;

        const { faces, vertices, faceVertexUvs, } = geometry;

        return <React3
            mainCamera="camera"
            width={ width }
            height={ height }
            antialias
        >
            <resources>

                <meshPhongMaterial
                    resourceId="monkeyTexture"
                    side={ DoubleSide }
                >
                 /*   <textureResource
                        resourceId="robotImage"
                    />
                    */
                </meshPhongMaterial>
                <geometry
                    resourceId="monkeyGeometry"
                    faces={ faces }
                    vertices={ vertices }
                    faceVertexUvs={ faceVertexUvs }
                />
            </resources>
            <scene>
                <perspectiveCamera
                    name="camera"
                    fov={ 75 }
                    aspect={ width / height }
                    near={ 0.1 }
                    far={ 1000 }
                    position={ cameraPosition }
                    lookAt={ lookAt }
                />
                <ambientLight
                    color={ 0xdddddd }
                />
                <Monkey
                    position={ monkeyPosition }
                    rotation={ monkeyRotation }
                />
            </scene>
        </React3>;

    }

}