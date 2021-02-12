import React, { useState, useEffect } from 'react';
import DropBox from './DropBox';
import { Map } from 'immutable';
import { getDefaultSize, getUniqueId } from './utils';
import DraggableItems from './DraggableItems';

const DropZones = ({ isPdfLoaded }) => {
    const [zones, setZones] = useState([]);
    const [selectedItem, setSelectedItem] = useState(undefined);
    const [pageItems, setItems] = useState(new Map()); //Map of maps (first keys are the zones id) (for the second keys its using a combination of the item name and a unique id)
    console.log('Selected Item -> ', selectedItem);
    // console.log('Current Items to render -> ', pageItems);
    const getZoneLocations = () => {
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

    const onMouseDown = (e) => {
        debugger
        if (selectedItem) {
            debugger
            if (e.target && e.target.className === 'draggableItemClass') {
                let data = e.target.dataset;
                if (selectedItem.zoneId !== data.zoneId && selectedItem.itemId === data.itemId) {
                    setSelectedItem({ zoneId : data.zoneId, itemId : data.itemId });
                }
            } else {
                setSelectedItem(undefined);
            }
        } else {
            if (e.target && e.target.className === 'draggableItemClass') {
                let data = e.target.dataset;
                setSelectedItem({ zoneId : data.zoneId, itemId : data.itemId });
            }
        }
    };

    useEffect(() => {
        if (isPdfLoaded) {
            setZones(getZoneLocations());
        }
    }, [isPdfLoaded]);

    useEffect(() => {
        window.addEventListener('mousedown', onMouseDown);
    }, []);

    if (!isPdfLoaded || !zones || zones.length === 0)
        return null;

    const onDrop = (item, pos, zone) => {
        console.log(`PDF -> item ${item.name} dropped on zone ${zone.id} on the following pos:`, pos);
        let currentItems = pageItems.get(zone.id);
        //INFO to see items structure see the commentary on initialization
        let itemId = item.name + getUniqueId();
        setSelectedItem({ itemId, zoneId : zone.id });
        if (!currentItems) {
            setItems(pageItems.set(zone.id, new Map({
                [itemId] : {
                    proprieties : item,
                    ...getDefaultSize(item),
                    x : pos.x,
                    y : pos.y
                }
            })));
        } else {
            setItems(pageItems.set(zone.id, currentItems.set(itemId, {
                proprieties : item,
                ...getDefaultSize(item),
                x : pos.x,
                y : pos.y
            })));
        }
    };

    const getZonesRender = () => {
        let zonesToReturn = [];
        let topOffset = zones[0].top;
        zones.forEach((zone, index) => {
            zonesToReturn.push(<DropBox
                zone={zone}
                key={index}
                onDrop={onDrop}
                childId={'dropPage' + zone.pageNumber}
                styles={{ position : 'absolute', top : topOffset, width : zone.width, height : zone.height }}
            >
                <DraggableItems items={pageItems.get(zone.id)} pageItems={pageItems} zone={zone} setItems={setItems}/>
            </DropBox>);
            topOffset += (zone.height + 10);
        });
        return zonesToReturn;
    };

    return (
        <>
            {getZonesRender().map(e => e)}
        </>
    );
};

export default DropZones;
