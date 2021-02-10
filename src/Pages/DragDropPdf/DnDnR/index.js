import React, { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { LocalBox, Thing } from '../ReactDnD/DnDutils';

const DnDnR = () => {
    const [items, setItems] = useState([]);
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ height : '100%', position : 'relative', display : 'flex', flexDirection : 'column' }}>
                <h2>DnDnR</h2>
                <div style={{ display : 'flex', width : '100%', height : '100%' }}>
                    <div style={{ display : 'flex', marginRight : '10px', height : '100%', flexDirection : 'column', width : '80px', backgroundColor : 'blue' }}>
                        <Thing name={'test1'} color={'black'}/>
                        <Thing name={'test2'} color={'yellow'}/>
                        <Thing name={'test3'} color={'green'}/>
                        <Thing name={'test4'} color={'white'}/>
                    </div>
                    <div style={{ height : '100%', flex : 1, position : 'relative' }}>
                        <LocalBox>

                        </LocalBox>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default DnDnR;
