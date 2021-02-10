import React from 'react';
import BodyControlled from './Demos/BodyControlled';
import SelectorBoundary from './Demos/SelectorBoundary';

const ReactRnD = () => {
    return (
        <div style={{ display : 'flex', flexDirection : 'column' }}>
            <h2>React RnD</h2>
            <br/>
            <BodyControlled/>
            <div style={{ width : '100%', height : '2px', backgroundColor : 'black', margin : '20px' }}/>
            <div style={{ marginBottom : '50px' }}>
                <SelectorBoundary/>
            </div>
        </div>
    );
};

export default ReactRnD;
