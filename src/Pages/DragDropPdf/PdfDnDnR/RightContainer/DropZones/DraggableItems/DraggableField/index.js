import React from 'react';

const DraggableField = ({ item, zone, itemKey, isSelected }) => {

    const getComponent = () => {
        switch ( item.proprieties.name ) {
            case 'sign':
                return 'signature';
            case 'date':
                return 'date';
            default:
                return 'unknown component';
        }
    };

    let styles = { width : '100%', height : '100%', backgroundColor : item.proprieties.color };
    if (isSelected) {
        styles.border = '4px solid black';
        styles.zIndex = '2px';
    }

    return (
        <div className={'draggableItemClass'} data-item-id={itemKey} data-zone-id={zone.id} style={styles}>
            {getComponent()}
        </div>
    );
};

export default DraggableField;
