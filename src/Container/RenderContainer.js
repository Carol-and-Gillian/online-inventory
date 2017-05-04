import React, {Component} from 'react';
import THREE, {Vector3, JSONLoader} from 'three';
import {ProgressBar} from 'react-bootstrap';
import Render from '../components/Render';
import modelMovementReducer from '../game-reducers/robotMovementReducer';

export default class RenderContainer extends Component {

    /**
     * Construct a RenderContainer object
     */
    constructor() {
        super();

        /*
         * Set the initial state of the RenderContainer, including both the camera position and the point at which the
         * camera is looking (these could, I note, be passed to the RenderContainer as properties or loaded out of a
         * file rather than being hard-coded into the container.
         */
        this.state = {
            cameraPosition: new Vector3(0, 0, 3),
            lookAt: new Vector3(0, 0, 0)
        }
    }

    /**
     * Override the hook to be called immediately after the RenderContainer node has been mounted into memory
     */
    componentDidMount() {
        this.mounted = true;

        /* attach the THREE framework to the window to process all of the WebGL that we're generating */
        window.THREE = THREE;

        /*
         * Load a model from a JSON file (N.B. we could shift this over to treating this property as an array of models,
         * which would allow us to load many models into the same scene with more or less the same code.
         */
        const loader = new JSONLoader();
        loader.load(
            'assets/' + this.props.model + '.json',
            geometry => this.setState({geometry: geometry}),
            error => console.log(error)
        )

        /* fire up the rendering process! */
        this.requestRenderLoop();
    }

    /**
     * Override the hook to be called immediately before the RenderContainer node is unmounted from memory
     */
    componentWillUnMount() {
        this.mounted = false;
        this.cancelRenderLoop();
    }

    /**
     * Schedule a new animation frame and provide our renderLoop as a callback to handle it
     */
    requestRenderLoop() {
        this.reqAnimId = window.requestAnimationFrame(this.renderLoop.bind(this));
    }

    /**
     * Update the state of the RenderContainer to move the models at each animation frame
     * @param time The timestamp of this animation frame
     */
    renderLoop(time) {
        if (!this.mounted) {
            return;
        }

        /* attach ourselves to the _next_ frame as well! */
        this.requestRenderLoop();

        /* use the modelMovementReducer function to adjust position/rotation of the model */
        const oldState = this.state;
        const newState = modelMovementReducer(oldState, time);
        this.setState(newState);
    }

    /**
     * Abort the render loop and cancel the next requested animation frame
     */
    cancelRenderLoop() {
        window.cancelAnimationFrame(this.reqAnimId);
    }

    /**
     * Generate the Render node (if we have data) to be processed by WebGL… or a progress bar if no data
     * @returns {XML}
     */
    render() {
        const width = 600;
        const height = 400;

        const {
            cameraPosition,
            geometry,
            lookAt,
            modelPosition,
            modelRotation
        } = this.state;

        /*
         * As you look at what's being passed around here, it would be interesting to think about how to store more of
         * the model-specific information (including, probably, the reducer) in the Model component or static files,
         * rather than storing so much of the scene and model information hard-coded in the RenderContainer.
         */
        return (
            <div>
                {geometry ?
                    <Render
                        width={width}
                        height={height}
                        cameraPosition={cameraPosition}
                        lookAt={lookAt}
                        geometry={geometry}
                        model={this.props.model}
                        modelPosition={modelPosition}
                        modelRotation={modelRotation}
                    /> :
                    /*
                     * completely full, striped progress bar -- a.k.a. barber pole -- indicating action but not a
                     * specific percentage of progress towards completion
                     */
                    <ProgressBar active={true} now={100} striped={true} label="Loading&hellip;"/>
                }
            </div>
        );
    }
}