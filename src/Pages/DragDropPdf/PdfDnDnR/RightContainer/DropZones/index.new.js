import React, { Component } from 'react';
import { Map } from 'immutable';
import { getDefaultSize, getUniqueId } from './utils';
import DropBox from './DropBox';
import DraggableItems from './DraggableItems';

class DropZones extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            zones : props.isPdfLoaded ? this.getZoneLocations() : [],
            pageItems : new Map(),
            selectedItem : undefined
        };
        this.onMouseDown.bind(this);
        window.addEventListener('mousedown', this.onMouseDown);
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', this.onMouseDown);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isPdfLoaded && !prevProps.isPdfLoaded) {
            this.setState({ zones : this.getZoneLocations() });
        }
    }

    getZoneLocations = () => {
        let pagesDivs = document.getElementsByClassName('page');
        let zonesToCreate = [];
        let pageNumber;
        for ( let i = 0; i < pagesDivs.length; i++ ) {
            pageNumber = pagesDivs[i].dataset.pageNumber;
            zonesToCreate.push({
                id : 'pageNumber' + pageNumber,
                pageNumber,
                top : pagesDivs[0].offsetTop,
                height : pagesDivs[0].offsetHeight,
                width : pagesDivs[0].offsetWidth,
            });
        }
        return zonesToCreate;
    };

    onMouseDown = (e) => {
        const { selectedItem } = this.state;
        if (selectedItem) {
            if (e.target && e.target.className === 'draggableItemClass') {
                let data = e.target.dataset;
                if (selectedItem.zoneId !== data.zoneId || selectedItem.itemId !== data.itemId) {
                    this.setState({ selectedItem : { zoneId : data.zoneId, itemId : data.itemId } });
                }
            } else {
                this.setState({ selectedItem : undefined });
            }
        } else {
            if (e.target && e.target.className === 'draggableItemClass') {
                let data = e.target.dataset;
                this.setState({ selectedItem : { zoneId : data.zoneId, itemId : data.itemId } });
            }
        }
    };

    onDrop = (item, pos, zone) => {
        const { pageItems } = this.state;
        console.log(`PDF -> item ${item.name} dropped on zone ${zone.id} on the following pos:`, pos);
        let currentItems = pageItems.get(zone.id);
        //INFO to see items structure see the commentary on initialization
        let itemId = item.name + getUniqueId();
        this.setState({ selectedItem : { itemId, zoneId : zone.id } });
        if (!currentItems) {
            this.setState({
                pageItems : pageItems.set(zone.id, new Map({
                    [itemId] : {
                        proprieties : item,
                        ...getDefaultSize(item),
                        x : pos.x,
                        y : pos.y
                    }
                }))
            });
        } else {
            this.setState({
                pageItems : pageItems.set(zone.id, currentItems.set(itemId, {
                    proprieties : item,
                    ...getDefaultSize(item),
                    x : pos.x,
                    y : pos.y
                }))
            });
        }
    };

    setPageItems = (itemsToSet) => {
        this.setState({ pageItems : itemsToSet });
    };

    getZonesRender = () => {
        const { zones, pageItems, selectedItem } = this.state;
        let zonesToReturn = [];
        let topOffset = zones[0].top;
        zones.forEach((zone, index) => {
            zonesToReturn.push(<DropBox
                zone={zone}
                key={index}
                onDrop={this.onDrop}
                childId={'dropPage' + zone.pageNumber}
                styles={{ position : 'absolute', top : topOffset, width : zone.width, height : zone.height }}
            >
                <DraggableItems selectedItem={selectedItem} items={pageItems.get(zone.id)} pageItems={pageItems} zone={zone} setItems={this.setPageItems}/>
            </DropBox>);
            topOffset += (zone.height + 10);
        });
        return zonesToReturn;
    };

    render() {
        const { zones } = this.state;
        const { isPdfLoaded } = this.props;

        if (!isPdfLoaded || !zones || zones.length === 0)
            return null;

        return (
            <>
                {this.getZonesRender().map(e => e)}
            </>
        );
    }
}

export default DropZones;