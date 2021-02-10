import React, { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { getUniqueId, LocalBox, Thing } from '../ReactDnD/DnDutils';
import { Map } from 'immutable';
import { Rnd } from 'react-rnd';

const style = {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
};

const DnDnR = () => {
    const [items, setItems] = useState(new Map());
    const onDrop = (item, pos) => {
        setItems(items.set(item.name + getUniqueId(), {
            color : item.color,
            width : '72px',
            height : '19px',
            x : pos.x,
            y : pos.y
        }));
    };
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
                        <LocalBox onDrop={onDrop}>
                            {items.entrySeq().map(([key, value]) => {
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
                                        setItems(items.set(key, { ...value, x : d.x, y : d.y }));
                                    }}
                                    onResize={(e, direction, ref, delta, position) => {
                                        setItems(items.set(key, { ...value, width : ref.offsetWidth, height : ref.offsetHeight, ...position }));
                                    }}
                                >
                                    <div style={{ backgroundColor : value.color, width : '100%', height : '100%' }}>
                                        {key}
                                    </div>
                                </Rnd>;
                            })}
                        </LocalBox>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default DnDnR;
