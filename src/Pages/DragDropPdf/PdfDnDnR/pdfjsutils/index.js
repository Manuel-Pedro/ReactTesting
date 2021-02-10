//window.addEventListener('scroll', handleWindowScroll);
export function onPdfLoad() {
    let viewer = document.getElementById('viewer-PdfDnRnR');
    for (let i = 0; i < window.pdf.numPages; i++) {
        let page = createEmptyPage(i + 1);
        viewer.appendChild(page);

        loadPage(i + 1).then((pdfPage) => {
            if (!pdfPage) return;
            let viewport = pdfPage.getViewport({ scale: window.DEFAULT_SCALE });
            window.PAGE_HEIGHT = viewport.height;
        });
    }
}

export function createEmptyPage(num) {
    let page = document.createElement('div');
    let canvas = document.createElement('canvas');
    let wrapper = document.createElement('div');
    let textLayer = document.createElement('div');

    page.className = 'page';
    wrapper.className = 'canvasWrapper';
    textLayer.className = 'textLayer';

    page.setAttribute('id', `pageContainer${num}`);
    page.setAttribute('data-loaded', 'false');
    page.setAttribute('data-page-number', num);

    canvas.setAttribute('id', `page${num}`);

    page.appendChild(wrapper);
    page.appendChild(textLayer);
    wrapper.appendChild(canvas);

    return page;
}

export function loadPage(pageNum) {
    console.log('Loading page, ', pageNum);
    if (window.LOADED_PAGES.get(pageNum)) {
        debugger;
        return new Promise((resolve) => {
            resolve();
        });
    }

    window.LOADED_PAGES.set(pageNum, true);
    return window.pdf.getPage(pageNum).then((pdfPage) => {
        let page = document.getElementById(`pageContainer${pageNum}`);
        let canvas = page.querySelector('canvas');
        let wrapper = page.querySelector('.canvasWrapper');
        let container = page.querySelector('.textLayer');
        let canvasContext = canvas.getContext('2d');
        let viewport = pdfPage.getViewport({ scale: window.DEFAULT_SCALE });

        canvas.width = viewport.width * 2;
        canvas.height = viewport.height * 2;
        page.style.width = `${viewport.width}px`;
        page.style.height = `${viewport.height}px`;
        page.style.marginBottom = `20px`;
        wrapper.style.width = `${viewport.width}px`;
        wrapper.style.height = `${viewport.height}px`;
        container.style.width = `${viewport.width}px`;
        container.style.height = `${viewport.height}px`;

        pdfPage.render({
            canvasContext,
            viewport
        });

        pdfPage.getTextContent().then((textContent) => {
            window.pdfjsLib.renderTextLayer({
                textContent,
                container,
                viewport,
                textDivs: []
            });
        });

        page.setAttribute('data-loaded', 'true');

        return pdfPage;
    });
}

export function handleWindowScroll() {
    let visiblePageNum = Math.round(window.scrollY / window.PAGE_HEIGHT) + 1;
    let visiblePage = document.querySelector(`.page[data-page-number="${visiblePageNum}"][data-loaded="false"]`);
    if (visiblePage) {
        setTimeout(function () {
            loadPage(visiblePageNum);
        });
    }
}
