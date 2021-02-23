import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { LoadingContext } from './Context';

const TemplateManager = () => {
    const [isLoading, setLoading] = React.useState(false);
    const [scale, setScale] = React.useState(1);
    const styles = getStyles();
    return (
        <div style={styles.root}>
            <LoadingContext.Provider value={{ isLoading, setLoading, scale, setScale }}>
                <Header setScale={setScale} scale={scale}/>
                <Body/>
                <Footer/>
            </LoadingContext.Provider>
            {isLoading && <div style={styles.loadingDiv}/>}
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
        },
        loadingDiv : {
            position : 'fixed',
            top : 0,
            left : 0,
            width : '100vw',
            height : '100vh',
            zIndex : 999,
            backgroundColor : 'rgba(0,0,0,0.8)'
        }
    };
};

export default TemplateManager;
