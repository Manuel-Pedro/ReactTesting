import React from 'react';

const Header = ({ scale, setScale }) => {
    const styles = getStyles();

    const onScaleMore = () => {

    };

    const onScaleLess = () => {

    };

    return (
        <div style={styles.root}>
            This is a Header &nbsp;
            <button onClick={onScaleMore}>&nbsp;Scale +&nbsp;</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={onScaleLess}>&nbsp;Scale -&nbsp;</button>
            &nbsp; &nbsp; &nbsp;
            {scale}
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
