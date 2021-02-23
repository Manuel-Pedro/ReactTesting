import React from 'react';

const BaseItem = ({ children, item, isSelected, setSelectedItem }) => {

    let styles = { width : '100%', height : '100%', zIndex : 2 };
    if (isSelected) {
        styles.border = '4px solid black';
        styles.zIndex = 3;
    }
    console.log(isSelected);

    const onClick = () => {
        if (isSelected !== item.itemId) {
            setSelectedItem(item.itemId);
        }
    };

    return (
        <div onClick={onClick} className={'draggableItemClass'} data-item-id={item.itemId} style={styles}>
            {children}
        </div>
    );
};

export default BaseItem;
