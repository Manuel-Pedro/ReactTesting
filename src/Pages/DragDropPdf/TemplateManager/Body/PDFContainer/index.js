import React, { useState } from 'react';

const PDFContainer = () => {
    const [isPdfLoaded, setPdfLoaded] = useState(false);
    const [pageSettings, setPageSettings] = useState();

    const onPdfLoad = () => {
        setPdfLoaded(true);
    };

    const styles = getStyles();

    return (
        <div style={styles.root}>

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

export default PDFContainer;
