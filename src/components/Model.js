/**
 * Created by gillianyue on 5/4/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Euler, Vector3} from 'three';

const Model = ({position, rotation}) =>
    <group position={position} rotation={rotation}>
        <mesh>
            <geometryResource resourceId="modelGeometry"/>
            <materialResource resourceId="modelTexture"/>
        </mesh>
    </group>;

Model.propTypes = {
    position: PropTypes.instanceOf(Vector3).isRequired,
    rotation: PropTypes.instanceOf(Euler).isRequired
}

export default Model