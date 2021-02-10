import React from 'react';
import { handleWindowScroll, onPdfLoad } from '../pdfjsutils';
import { LocalBox, getUniqueId } from '../../ReactDnD/DnDutils';
import { Map } from 'immutable';
import { Rnd } from 'react-rnd';

const RightContainer = () => {
    React.useEffect(() => {
        if (window.PDF_LOADED) {
            onPdfLoad();
        } else {
            window.addEventListener('PDF_LOADED', () => {
                onPdfLoad();
            });
        }
        window.addEventListener('scroll', handleWindowScroll);
    }, []);

    const [items, setItems] = React.useState(new Map());
    const onDrop = (item, pos) => {
        setItems(
            items.set(item.name + getUniqueId(), {
                color: item.color,
                width: '72px',
                height: '19px',
                x: pos.x,
                y: pos.y
            })
        );
    };

    const styles = getStyles();

    return (
        <div style={styles.root}>
            <h2>ReactPdf</h2>
            <LocalBox onDrop={onDrop}>
                <div id="viewer-PdfDnRnR" className="pdfViewer" />
                {items.entrySeq().map(([key, value]) => {
                    return (
                        <Rnd
                            key={`rnd${key}`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            bounds="parent"
                            size={{
                                width: value.width,
                                height: value.height
                            }}
                            position={{
                                x: value.x,
                                y: value.y
                            }}
                            onDragStop={(e, d) => {
                                setItems(items.set(key, { ...value, x: d.x, y: d.y }));
                            }}
                            onResize={(e, direction, ref, delta, position) => {
                                setItems(items.set(key, { ...value, width: ref.offsetWidth, height: ref.offsetHeight, ...position }));
                            }}
                        >
                            <div style={{ backgroundColor: value.color, width: '100%', height: '100%' }}>{key}</div>
                        </Rnd>
                    );
                })}
            </LocalBox>
        </div>
    );
};

const getStyles = () => {
    return {
        root: {
            height: '100%',
            marginLeft: '100px',
            position: 'relative'
        }
    };
};

export default RightContainer;
