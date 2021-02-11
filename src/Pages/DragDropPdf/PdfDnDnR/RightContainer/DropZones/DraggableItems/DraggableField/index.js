import React from 'react';

const DraggableField = ({item}) => {

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
        <div style={{ width : '100%', height : '100%', backgroundColor : item.proprieties.color }}>
            {getComponent()}
        </div>
    );
};

export default DraggableField;
