import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const TemplateManager = () => {
    const styles = getStyles();
    return (
        <div style={styles.root}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

const getStyles = () => {
    return {
        root : {
            height : '100%',
            position : 'relative',
            display : 'flex',
            flexDirection : 'column'
        }
    };
};

export default TemplateManager;
