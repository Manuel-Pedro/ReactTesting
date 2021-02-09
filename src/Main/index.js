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
import Placeholder from '../Pages/Placeholder';
import PdfDnDnR from '../Pages/PdfDnDnR';
import ReactDnD from '../Pages/ReactDnD';
import ReactPdf from '../Pages/ReactPdf';
import ReactRnD from '../Pages/ReactRnD';
import Footer from './Footer';
import Header from './Header';

const FixedMenuLayout = () => (
    <Router>
        <div style={{ position : 'relative', display : 'flex', flexDirection : 'column', height : '100%' }}>
            <Header/>
            <Container text style={{ marginTop : '7em', height : '100%' }}>
                <Switch>
                    <Route path="/about">
                        <Placeholder/>
                    </Route>
                    <Route path="/RnD">
                        <ReactRnD/>
                    </Route>
                    <Route path="/DnD">
                        <ReactDnD/>
                    </Route>
                    <Route path="/Pdf">
                        <ReactPdf/>
                    </Route>
                    <Route path="/PdfDnDnR">
                        <PdfDnDnR/>
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