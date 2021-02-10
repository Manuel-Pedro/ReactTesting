import React from 'react';
import LeftBar from './LeftBar';
import RightContainer from './RightContainer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const PdfDnDnR = () => {
    const styles = getStyles();

    return (
        <div style={{ height: '100%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <h2>Demo for a PDF with Drag and drop components with resize </h2>
            <div style={styles.bars}>Header</div>
            <div style={styles.root}>
                <DndProvider backend={HTML5Backend}>
                    <LeftBar />
                    <RightContainer />
                </DndProvider>
            </div>
            <div style={styles.bars}>Footer</div>
        </div>
    );
};

const getStyles = () => {
    return {
        root: {
            display: 'flex',
            width: '100%',
            height: '100%',
            flex: 1,
            backgroundColor: 'grey',
            overflow: 'auto'
        },
        bars: {
            padding: '15px 25px',
            backgroundColor: 'white',
            border: '1px dotted black'
        }
    };
};

export default PdfDnDnR;
