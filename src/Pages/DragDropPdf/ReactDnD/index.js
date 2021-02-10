import React, { useRef } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import './styles.css';

const ReactDnD = () => {
    return (
        <div style={{ height : '100%', position : 'relative',display: 'flex', flexDirection: 'column' }}>
            <h2>ReactDnD</h2>
            <DndProvider backend={HTML5Backend}>
                <>
                    <GlobalBox/>
                    <LocalBox/>
                    <Thing/>
                </>
            </DndProvider>
        </div>
    );
};

function GlobalBox() {
    const ref = useGlobalDrop(console.log);
    return <div ref={ref} className="GlobalBox"/>;
}

function LocalBox() {
    const ref = useLocalDrop(console.log);
    return <div ref={ref} className="LocalBox"/>;
}

function Thing() {
    const [, drag] = useDrag({
        item : { type : 'thing' }
    });
    return (
        <div className="Thing" ref={drag}>
            wao
        </div>
    );
}

function useLocalDrop(onDrop) {
    const ref = useRef();

    const [, dropTarget] = useDrop({
        accept : 'thing',
        drop(item, monitor) {
            const offset = monitor.getSourceClientOffset();
            if (offset && ref.current) {
                const dropTargetXy = ref.current.getBoundingClientRect();
                onDrop('local', {
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

function useGlobalDrop(onDrop) {
    const [, dropTarget] = useDrop({
        accept : 'thing',
        drop(item, monitor) {
            const offset = monitor.getClientOffset();
            if (offset) {
                onDrop('global', offset);
            }
        }
    });

    return dropTarget;
}

export default ReactDnD;
