import React from 'react';

const DraggableField = ({ item, zone ,itemKey}) => {

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

    return (
        <div className={'draggableItemClass'} data-item-id={itemKey} data-zone-id={zone.id}  style={{ width : '100%', height : '100%', backgroundColor : item.proprieties.color }}>
            {getComponent()}
        </div>
    );
};

export default DraggableField;
