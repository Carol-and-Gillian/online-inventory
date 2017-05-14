import { Vector3, Euler, } from 'three';

const positionScale = 0.5;
const positionSpeed = 0.001;
const positionOffset = 0.2;

const rotationSpeed = 0.003;
const rotationScale = 0.05;

/**
 * We can manage our game state in a series of small, easy to reason about
 * functions
 **/
export default function modelMovementReducer( oldState, time ) {

    // Merge the old state with the updated properties
    return {
        ...oldState,
       // modelPosition: new Vector3( 0, 0, positionScale * Math.sin( time * positionSpeed ) + positionOffset ),
     /*   modelRotation: new Euler( 2,
            (oldState.modelRotation ? oldState.modelRotation.y + 0.005 : 0.01), rotationScale * Math.sin( time * rotationSpeed ))
   */
     modelRotation: new Euler(2,
         rotationScale * Math.sin( time * rotationSpeed),
             (oldState.modelRotation ? oldState.modelRotation.z + 0.005 : 0.01))
    };

}