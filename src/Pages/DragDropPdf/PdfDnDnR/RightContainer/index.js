import React, { useState } from 'react';
import PDFViewer from './PDFViewer';
import DropZones from './DropZones/index.new';

const RightContainer = () => {

    const [isPdfLoaded, setPdfLoaded] = useState(false);

    const onPdfLoad = () => {
        setPdfLoaded(true);
    };

    const styles = getStyles();
    return (
        <div style={styles.root}>
            <PDFViewer onPdfLoad={onPdfLoad}>
                <DropZones isPdfLoaded={isPdfLoaded}/>
            </PDFViewer>
        </div>
    );
};

const getStyles = () => {
    return {
        root : {
            height : '100%',
            marginLeft : '100px',
            position : 'relative',
            flex : 1,
            overflow : 'auto',
        }
    };
};

export default RightContainer;
