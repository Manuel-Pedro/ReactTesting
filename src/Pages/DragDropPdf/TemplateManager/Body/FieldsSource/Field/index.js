import { useDrag } from 'react-dnd';
import React from 'react';

export function Field({ name, icon }) {
    //Dont delete the comma, we dont want the first arg ?? (no clue)
    const [, drag] = useDrag({
        item : { type : 'FIELD', name : name }
    });

    const styles = getStyles();

    return <div ref={drag} style={styles.root}>
        <div style={styles.innerContainer}>
            {icon}
        </div>
    </div>;
}

const getStyles = () => {
    return {
        root : {
            width : '52px',
            height : '32px',
            borderRadius : '3px',
            backgroundColor : '#d6d6d6',
            marginBottom : '24px'
        },
        innerContainer : {
            padding : '6px 4px',
            width : '100%',
            height : '100%',
            display : 'flex',
            alignItems : 'center',
        }
    };
};
