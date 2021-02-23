import React, { useEffect } from 'react';

function loadPdf(pdf, scale, setPageSettings, setLoading, setPages) {
    let canvasContainer = document.getElementById('holder');
    let eventBus = new window.pdfjsViewer.EventBus();
    let pagePromiseArray = [];
    let pages = [];
    for ( let num = 1; num <= pdf.numPages; num++ ) {
        pagePromiseArray.push(pdf.getPage(num).then((pdfPage) => {
            /* pdfPage.getAnnotations().then(items => {
             console.log('Gotten the following annotations for the page number' + num + ': ', items);
             });*/
            let pdfPageView = new window.pdfjsViewer.PDFPageView({
                container : canvasContainer,
                id : num,
                scale : window.DEFAULT_SCALE,
                defaultViewport : pdfPage.getViewport({ scale : scale }),
                eventBus,
                renderInteractiveForms : false,
            });
            pages.push(pdfPageView);
            pdfPageView.setPdfPage(pdfPage);
            return pdfPageView.draw();
        }));
    }

    Promise.all(pagePromiseArray).then(() => {
        setPages(pages);
        setPageSettings({ width : pages[0].width, height : pages[0].height, pageNum: pdf.numPages });
        setLoading(false);
    });
}

const PDFViewer = ({ setPageSettings, setLoading, children }) => {
    const [docScale, setScale] = React.useState(1.0);
    const [pages, setPages] = React.useState();
    useEffect(() => {
        setLoading(true);
        let documentPromise = window.pdfjsLib.getDocument('./assets/novabase.pdf');
        documentPromise.promise.then((pdf) => {
            loadPdf(pdf, docScale, setPageSettings, setLoading, setPages);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // if (pages) {
        //     debugger
        //     setLoading(true);
        //     pages.forEach(e => {
        //         e.scale = docScale;
        //         e.update();
        //     });
        //     setLoading(false);
        // }
        // TODO: Update page settings with the results
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [docScale]);

    return (
        <div style={{ height : '100%', position : 'absolute', top : 0, left : 0, overflow : 'auto', width : '100%', display : 'flex', justifyContent : 'center' }}>
            <div id="holder" style={{ position : 'relative' }}/>
            {children}
        </div>
    );
};

export default PDFViewer;