import React, { useEffect } from 'react';

function loadPdf(onPdfLoad) {
    let canvasContainer = document.getElementById('holder');
    let eventBus = new window.pdfjsViewer.EventBus();
    let pagePromiseArray = [];
    for ( let num = 1; num <= window.pdf.numPages; num++ ) {
        pagePromiseArray.push(window.pdf.getPage(num).then((pdfPage) => {
            let pdfPageView = new window.pdfjsViewer.PDFPageView({
                container : canvasContainer,
                id : num,
                scale : window.DEFAULT_SCALE,
                defaultViewport : pdfPage.getViewport({ scale : window.DEFAULT_SCALE }),
                eventBus,
                annotationLayerFactory : new window.pdfjsViewer.DefaultAnnotationLayerFactory(),
                renderInteractiveForms : true,
            });
            pdfPageView.setPdfPage(pdfPage);
            return pdfPageView.draw();
        }));
    }
    Promise.all(pagePromiseArray).then(() => {
        onPdfLoad && onPdfLoad();
    });
}

const PDFViewer = ({ onPdfLoad, children }) => {

    useEffect(() => {
        if (window.PDF_LOADED) {
            loadPdf(onPdfLoad);
        } else {
            window.addEventListener('PDF_LOADED', () => loadPdf(onPdfLoad));
        }
    }, []);

    return (
        <div style={{ height : '100%', position : 'absolute', top : 0, left : 0, overflow : 'auto', width : '100%', display : 'flex', justifyContent : 'center' }}>
            <div id="holder" style={{ position : 'relative' }}>
                {children}
            </div>
        </div>
    );
};

export default PDFViewer;