import React from 'react';
import { Field } from './Field';

const FieldsSource = () => {

    const styles = getStyles();

    return (
        <div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                <div style={styles.title}>
                    Add Fields
                </div>
                <div style={styles.titleDivider}/>
                <Field name={'TEXT_FIELD'} icon={'txt'}/>
                <Field name={'SIGNATURE'} icon={'sign'}/>
                <Field name={'RADIO'} icon={'radio'}/>
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
            width : '123px'
        },
        innerContainer : {
            margin : '10px 23px 0px',
            height : '100%',
            display : 'flex',
            backgroundColor : 'white',
            borderRadius : '4px',
            flexDirection : 'column',
            alignItems : 'center'
        },
        title : {
            fontSize : '14px',
            color : '#8e8e8e',
            padding : '8px 0px'
        },
        titleDivider : {
            borderRadius : '1px',
            backgroundColor : '#8e8e8e',
            height : '2px',
            width : '70%',
            margin : '0px 16px 16px'
        }
    };
};

export default FieldsSource;
