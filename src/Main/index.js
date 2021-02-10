import React from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Placeholder from '../Pages/DragDropPdf/Placeholder';
import PdfDnDnR from '../Pages/DragDropPdf/PdfDnDnR';
import ReactDnD from '../Pages/DragDropPdf/ReactDnD';
import ReactPdf from '../Pages/DragDropPdf/ReactPdf/index';
import ReactRnD from '../Pages/DragDropPdf/ReactRnD';
import Header from './Header';
import DnDnR from '../Pages/DragDropPdf/DnDnR';
import DnRnPdf from '../Pages/DragDropPdf/DnRnPdf';

const FixedMenuLayout = () => (
    <Router>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Header />
            <Container style={{ paddingTop: '50px', height: '100%', paddingBottom: '10px' }}>
                <Switch>
                    {/*Placeholder remove in future when more tabs (also improve english)*/}
                    <Route path="/about">
                        <Placeholder />
                    </Route>
                    {/*Drag/Drop/Pdf*/}
                    <Route path="/RnD">
                        <ReactRnD />
                    </Route>
                    <Route path="/DnD">
                        <ReactDnD />
                    </Route>
                    <Route path="/Pdf">
                        <ReactPdf />
                    </Route>
                    <Route path="/PdfDnDnR">
                        <PdfDnDnR />
                    </Route>
                    <Route path="/DnDnR">
                        <DnDnR />
                    </Route>
                    <Route path="/DnRnPdf">
                        <DnRnPdf />
                    </Route>
                    {/*Home*/}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </div>
    </Router>
);

export default FixedMenuLayout;
