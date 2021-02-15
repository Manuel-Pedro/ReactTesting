import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FieldsSource from './FieldsSource';

const Body = () => {
    const styles = getStyles();
    return (
        <div style={styles.root}>
            <DndProvider backend={HTML5Backend}>
                <FieldsSource/>
            </DndProvider>
        </div>
    );
};

const getStyles = () => {
    return {
        root : {
            display : 'flex',
            width : '100%',
            height : '100%',
            flex : 1,
            backgroundColor : 'grey',
            paddingBottom : '10px'
        }
    };
};

export default Body;
