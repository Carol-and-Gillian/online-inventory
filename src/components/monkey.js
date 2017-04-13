/**
 * Created by gillianyue on 4/11/17.
 */
import React, { Component, PropTypes, } from 'react';
import React3 from 'react-three-renderer';
import { Euler, Vector3, } from 'three';


const Monkey = ({ position, rotation }) => <group
    position={ position }
    rotation={ rotation }
>
    <mesh>
        <geometryResource
            resourceId="monkeyGeometry"
        />
        <materialResource
            resourceId="monkeyTexture"
        />
    </mesh>
</group>;

Monkey.propTypes = {
    position: PropTypes.instanceOf( Vector3 ).isRequired,
    rotation: PropTypes.instanceOf( Euler ).isRequired,
}

export default Monkey;