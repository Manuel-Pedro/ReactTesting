import React, { useEffect, useState, useRef, useCallback } from 'react';
import { handleWindowScroll, onPdfLoad } from './pdfjsutils';

const ReactPdf = () => {

    useEffect(() => {
        if (window.PDF_LOADED) {
            onPdfLoad();
        } else {
            window.addEventListener('PDF_LOADED', () => {
                onPdfLoad();
            });
        }
        window.addEventListener('scroll', handleWindowScroll);
    }, []);

    return (
        <div style={{ height : '100%', position : 'relative' }}>
            <h2>ReactPdf</h2>
            <div id="viewer" className="pdfViewer"/>
        </div>
    );
};

export default ReactPdf;
