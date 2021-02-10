import React from 'react';
import { Thing } from '../../ReactDnD/DnDutils';

const LeftBar = () => {
    const styles = getStyles();

    return (
        <div style={styles.outerContainer}>
            <div style={styles.innerContainer}>
                <div style={{ display: 'flex', marginRight: '10px', height: '100%', flexDirection: 'column', width: '80px' }}>
                    <Thing name={'test1'} color={'black'} />
                    <Thing name={'test2'} color={'yellow'} />
                    <Thing name={'test3'} color={'green'} />
                    <Thing name={'test4'} color={'white'} />
                </div>
            </div>
        </div>
    );
};

const getStyles = () => {
    return {
        outerContainer: {
            position: 'absolute',
            display: 'flex',
            marginRight: '10px',
            height: '100%',
            flexDirection: 'column',
            width: '80px'
        },
        innerContainer: {
            margin: '16px 20px',
            height: '100%',
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '4px'
        }
    };
};

export default LeftBar;
