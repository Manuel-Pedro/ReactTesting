import React from 'react';

const Header = () => {
    const styles = getStyles();
    return (
        <div style={styles.root}>
            This is a Header
        </div>
    );
};

const getStyles = () => {
    return {
        root : {
            padding : '15px 25px',
            backgroundColor : 'white',
            border : '1px dotted black'
        }
    };
};

export default Header;
