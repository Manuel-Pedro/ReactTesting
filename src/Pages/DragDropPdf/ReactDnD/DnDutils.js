import { useDrag, useDrop } from 'react-dnd';
import React, { useRef } from 'react';

export function LocalBox({ children }) {
    const ref = useLocalDrop((item, pos) => {
        console.log('You dropped the item ' + item.name + ' on the pos:', pos);
    });
    return <div ref={ref} style={{ position : 'absolute', width : '100%', height : '100%', backgroundColor : 'red' }}>{children}</div>;
}

export function Thing({ name, color }) {
    //Dont delete the comma, we dont want the first arg ?? (no clue)
    const [, drag] = useDrag({
        item : { type : 'thing', name : name, color : color }
    });
    return (
        <div style={{ backgroundColor : color, margin : '4px' }} ref={drag}>
            Test
        </div>
    );
}

export function useLocalDrop(onDrop) {
    const ref = useRef();
    const [, dropTarget] = useDrop({
        accept : 'thing',
        drop(item, monitor) {
            const offset = monitor.getSourceClientOffset();
            if (offset && ref.current) {
                const dropTargetXy = ref.current.getBoundingClientRect();
                onDrop(item, {
                    x : offset.x - dropTargetXy.left,
                    y : offset.y - dropTargetXy.top
                });
            }
        }
    });
    return (elem) => {
        ref.current = elem;
        dropTarget(ref);
    };
}