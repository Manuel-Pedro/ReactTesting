import React from 'react';
import { Rnd } from 'react-rnd';
import { Map } from 'immutable';

const style = {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    border : 'solid 1px #ddd',
    background : '#f0f0f0'
};

const parentBoundary = {
    background : '#eee',
    width : '100%',
    height : '500px',
};

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements : new Map({
                test1 : { width : 200, height : 100, x : 0, y : 0 },
                test2 : { width : 200, height : 100, x : 210, y : 0 },
                test3 : { width : 200, height : 100, x : 0, y : 110 },
                test4 : { width : 200, height : 100, x : 0, y : 220 },
            }),
        };
    }

    render() {
        return (
            <>
                <h2>Parent Controlled</h2>
                <div style={parentBoundary}>
                    {this.state.elements.entrySeq().map(([key, value]) => {
                        return <Rnd
                            key={`rnd${key}`}
                            style={style}
                            bounds="parent"
                            size={{
                                width : value.width,
                                height : value.height,
                            }}
                            position={{
                                x : value.x,
                                y : value.y,
                            }}
                            onDragStop={(e, d) => {
                                this.setState({ elements : this.state.elements.set(key, { ...value, x : d.x, y : d.y }) });
                            }}
                            onResize={(e, direction, ref, delta, position) => {
                                this.setState({ elements : this.state.elements.set(key, { width : ref.offsetWidth, height : ref.offsetHeight, ...position }) });
                            }}
                        >
                            <div>
                                {key}
                            </div>
                        </Rnd>;
                    })}


                </div>
            </>
        );
    }
}
