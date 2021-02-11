import React from 'react';
import { Rnd } from 'react-rnd';
import DraggableField from './DraggableField';

const style = {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
};

const DraggableItems = ({ items, zone, setItems, pageItems }) => {
    if (!items) {
        return null;
    }

    return (
        <>
            {items.entrySeq().map(([key, item]) => {
                return <Rnd
                    key={`rnd${key}`}
                    style={style}
                    bounds="parent"
                    size={{
                        width : item.width,
                        height : item.height,
                    }}
                    position={{
                        x : item.x,
                        y : item.y,
                    }}
                    onDragStop={(e, d) => {
                        setItems(pageItems.set(zone.id, items.set(key, { ...item, x : d.x, y : d.y })));
                    }}
                    onResize={(e, direction, ref, delta, position) => {
                        setItems(pageItems.set(zone.id, items.set(key, { ...item, width : ref.offsetWidth, height : ref.offsetHeight, ...position })));
                    }}
                >
                    <DraggableField item={item}/>
                </Rnd>;
            })}
        </>
    );
};

export default DraggableItems;