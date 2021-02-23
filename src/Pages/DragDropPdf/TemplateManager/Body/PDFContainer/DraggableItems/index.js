import React from 'react';
import { Rnd } from 'react-rnd';
import BaseItem from './BaseItem';
import Signature from './Types/Signature';

const DraggableItems = ({ items, selectedItem, setItems,setSelectedItem }) => {

    const getComponent = (item) => {
        switch ( item.proprieties.name ) {
            case 'SIGNATURE':
                return <Signature item={item} selectedItem={selectedItem}/>;
            default:
                return <div>unknown</div>;
        }
    };

    return (
        <>
            {items.entrySeq().map(([key, item]) => {
                return <Rnd
                    key={`rnd${key}`}
                    style={{ display : 'flex', alignItems : 'center', justifyContent : 'center' }}
                    bounds="parent"
                    enableResizing={item.proprieties.name !== 'CUSTOM'}
                    disableDragging={item.proprieties.name === 'CUSTOM'}
                    size={{
                        width : item.width,
                        height : item.height,
                    }}
                    position={{
                        x : item.x,
                        y : item.y,
                    }}
                    onDragStop={(e, d) => {
                        setItems(items.set(key, { ...item, x : d.x, y : d.y }));
                    }}
                    onResize={(e, direction, ref, delta, position) => {
                        setItems(items.set(key, { ...item, width : ref.offsetWidth, height : ref.offsetHeight, ...position }));
                    }}
                >
                    <BaseItem isSelected={selectedItem === key} item={item} setSelectedItem={setSelectedItem}>
                        {getComponent(item)}
                    </BaseItem>
                </Rnd>;
            })}
        </>
    );
};

export default DraggableItems;
