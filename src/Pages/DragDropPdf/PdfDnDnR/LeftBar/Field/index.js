import { useDrag } from 'react-dnd';
import React from 'react';

export function Field({ name, color }) {
    //Dont delete the comma, we dont want the first arg ?? (no clue)
    const [, drag] = useDrag({
        item : { type : 'FIELD', name : name, color : color }
    });
    return (
        <div style={{ backgroundColor : color, margin : '4px', padding : "2px" }} ref={drag}>
            Field {name}
        </div>
    );
}