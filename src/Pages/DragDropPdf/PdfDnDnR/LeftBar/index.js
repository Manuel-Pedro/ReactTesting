import React from 'react';

const LeftBar = () => {
    const styles = getStyles();
    return (
        <div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                test
            </div>
        </div>
    );
};

const getStyles = () => {
    return {
        outerContainer : {
            display : 'flex',
            marginRight : '10px',
            height : '100%',
            flexDirection : 'column',
            width : '80px'
        },
        innerContainer : {
            margin : '16px 20px',
            height : '100%',
            display : 'flex',
            backgroundColor : 'white',
            borderRadius : '4px'
        }
    };
};

export default LeftBar;
