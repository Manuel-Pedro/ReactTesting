import React, { Component, useState } from 'react';
import { LoadingContext } from '../../Context';
import PDFViewer from './PDFViewer';
import DropZone from './DropZone';
import { Map } from 'immutable';
import { getUniqueId, getDefaultSize } from './utils';
import DraggableItems from './DraggableItems';

class PDFContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            pageSettings : undefined,
            items : new Map(), // map of { properties: {name:""},itemId: '', width: "", height: "" , x: number, y:number}
            selectedItem : undefined
        };
        this.onMouseDown.bind(this);
        window.addEventListener('mousedown', this.onMouseDown);
    }

    setPageSettings = (pageSettings) => {
        this.setState({ pageSettings });
    };
    setItems = (items) => {
        this.setState({ items });
    };
    setSelectedItem = (selectedItem) => {
        this.setState({ selectedItem });
    };

    onDrop = (item, pos) => {
        console.log(`PDF -> item ${item.name} dropped on the following pos:`, pos);
        const { items } = this.state;
        let itemId = item.name + getUniqueId();
        this.setState({
            selectedItem : itemId, items : items.set(itemId, {
                proprieties : item,
                itemId,
                ...getDefaultSize(item),
                x : pos.x,
                y : pos.y
            })
        });
    };

    onMouseDown = (e) => {
        const { selectedItem } = this.state;
        if (selectedItem) {
            if (e.target && e.target.className.includes('draggableItemClass')) {
                let data = e.target.dataset;
                if (selectedItem !== data.itemId) {
                    this.setState({ selectedItem : data.itemId });
                    e.stopPropagation();
                    e.preventDefault();
                }
            } else {
                this.setState({ selectedItem : undefined });
            }
        } else {
            if (e.target && e.target.className.includes('draggableItemClass')) {
                let data = e.target.dataset;
                e.stopPropagation();
                e.preventDefault();
                this.setState({ selectedItem : data.itemId });
            }
        }
    };

    render() {
        const styles = getStyles();
        const { pageSettings, items, selectedItem } = this.state;
        return (
            <LoadingContext.Consumer>
                {({ isLoading, setLoading }) => (
                    <div style={styles.root}>
                        <PDFViewer setLoading={setLoading} setPageSettings={this.setPageSettings}>
                            <DropZone pageSettings={pageSettings} onDrop={this.onDrop}>
                                <DraggableItems items={items} selectedItem={selectedItem} setItems={this.setItems} setSelectedItem={this.setSelectedItem}/>
                            </DropZone>
                        </PDFViewer>
                    </div>
                )}
            </LoadingContext.Consumer>
        );
        ;
    }
}

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
