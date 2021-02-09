import React from 'react';
import {
    Container
} from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Footer from './Footer';
import Header from './Header';

const FixedMenuLayout = () => (
    <Router>
        <div style={{ position : 'relative', display : 'flex', flexDirection : 'column', height : '100%' }}>

            <Header/>

            <Container text style={{ marginTop : '7em', height : '100%' }}>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Container>

            <Footer/>
        </div>
    </Router>
);

export default FixedMenuLayout;