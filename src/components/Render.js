import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Vector3, Euler, Geometry, DoubleSide} from 'three';
import React3 from 'react-three-renderer';
import Model from './Model';

export default class Render extends Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        cameraPosition: PropTypes.instanceOf(Vector3).isRequired,
        lookAt: PropTypes.instanceOf(Vector3).isRequired,
        geometry: PropTypes.instanceOf(Geometry).isRequired,
        modelPosition: PropTypes.instanceOf(Vector3).isRequired,
        modelRotation: PropTypes.instanceOf(Euler).isRequired
    }

    render() {
        const {
            width,
            height,
            cameraPosition,
            geometry,
            lookAt,
            modelPosition,
            modelRotation
        } = this.props;

        const {
            faces,
            vertices,
            faceVertexUvs
        } = geometry;

        return (
            <React3
                mainCamera="camera"
                width={width}
                height={height}
                antialias
            >
                <resources>
                      <texture
                    resourceId="modelImage"
                    url={"assets/" + this.props.model + "-texture.png"}
                    anisotropy={2}
                />

                    <meshPhongMaterial resourceId="modelTexture"
                        side={DoubleSide}
                    >
                        <textureResource resourceId="modelImage"/>
                    </meshPhongMaterial>

                    <geometry
                        resourceId="modelGeometry"
                        faces={faces}
                        vertices={vertices}
                        faceVertexUvs={faceVertexUvs}
                    />
                </resources>
                <scene>
                    <perspectiveCamera
                        name="camera"
                        fov={75}
                        aspect={width / height}
                        near={0.1}
                        far={1000}
                        position={cameraPosition}
                        lookAt={lookAt}
                    />
                    <ambientLight
                        color={0xdddddd}
                    />
                    <Model
                        position={modelPosition}
                        rotation={modelRotation}
                    />
                </scene>
            </React3>
        );
    }
}