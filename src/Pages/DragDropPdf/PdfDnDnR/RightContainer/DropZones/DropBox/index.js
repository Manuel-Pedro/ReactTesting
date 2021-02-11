import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';

function useLocalDrop(onDrop) {
    const ref = useRef();
    const [, dropTarget] = useDrop({
        accept : 'FIELD',
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

function DropBox({ children, childId, onDrop, styles = {}, zone }) {
    const ref = useLocalDrop((item, pos) => {
        onDrop && onDrop(item, pos, zone);
    });

    return (
        <div ref={ref} id={childId} style={{ ...styles }}>
            {children}
        </div>
    );
}

export default DropBox;