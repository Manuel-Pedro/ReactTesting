import React, { useState, useEffect } from 'react';
import DropBox from './DropBox';
import { Map } from 'immutable';
import { getDefaultSize, getUniqueId } from './utils';
import DraggableItems from './DraggableItems';

const DropZones = ({ isPdfLoaded }) => {
    const [zones, setZones] = useState([]);
    const [pageItems, setItems] = useState(new Map()); //Map of maps (first keys are the zones id) (for the second keys its using a combination of the item name and a unique id)
    console.log('Current Items to render -> ', pageItems);
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

    useEffect(() => {
        if (isPdfLoaded) {
            setZones(getZoneLocations());
        }
    }, [isPdfLoaded]);

    if (!isPdfLoaded || !zones || zones.length === 0)
        return null;

    const onDrop = (item, pos, zone) => {
        console.log(`PDF -> item ${item.name} dropped on zone ${zone.id} on the following pos:`, pos);
        let currentItems = pageItems.get(zone.id);
        //INFO to see items structure see the commentary on initialization
        if (!currentItems) {
            setItems(pageItems.set(zone.id, new Map({
                [item.name + getUniqueId()] : {
                    proprieties : item,
                    ...getDefaultSize(item),
                    x : pos.x,
                    y : pos.y
                }
            })));
        } else {
            setItems(pageItems.set(zone.id, currentItems.set(item.name + getUniqueId(), {
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
