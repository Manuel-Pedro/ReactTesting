import React from 'react';
import { Field } from './Field';

const LeftBar = () => {
    const styles = getStyles();

    return (
        <div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                <Field name={'sign'} color={'blue'}/>
                <Field name={'date'} color={'red'}/>
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
            width : '100px'
        },
        innerContainer : {
            margin : '10px 20px 0px',
            height : '100%',
            display : 'flex',
            backgroundColor : 'white',
            borderRadius : '4px',
            flexDirection : 'column',
        }
    };
};

export default LeftBar;
