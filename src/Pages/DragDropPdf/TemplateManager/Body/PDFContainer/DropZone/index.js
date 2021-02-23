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

const DropZone = ({ pageSettings, onDrop, children }) => {

    const ref = useLocalDrop((item, pos) => {
        onDrop && onDrop(item, pos);
    });

    if (!pageSettings)
        return null;

    let pagesHeight = (pageSettings.height + 10) * pageSettings.pageNum - 10;

    return (<div ref={ref} style={{ position : 'absolute', width : pageSettings.width, height : pagesHeight, top : '10px' }}>
        {children}
    </div>);
};

export default DropZone;
