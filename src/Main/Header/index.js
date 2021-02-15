import React from 'react';
import {
    Container,
    Dropdown,
    Menu,
} from 'semantic-ui-react';
import {
    Link
} from 'react-router-dom';

export default function Header() {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Link to="/"><Menu.Item header>
                    React Testing
                </Menu.Item></Link>

                <Dropdown item simple text='Drag/Drop/Pdf'>
                    <Dropdown.Menu>
                        <Dropdown.Header>Drag & Drop</Dropdown.Header>
                        <Link to="/RnD"><Dropdown.Item style={{color:"black"}}>React Rnd</Dropdown.Item></Link>
                        <Link to="/DnD"><Dropdown.Item style={{color:"black"}}>React Dnd</Dropdown.Item></Link>
                        <Dropdown.Divider/>
                        <Dropdown.Header>PDF</Dropdown.Header>
                        <Link to="/Pdf"><Dropdown.Item style={{color:"black"}}>Pdf Js</Dropdown.Item></Link>
                        <Dropdown.Divider/>
                        <Dropdown.Header>Others</Dropdown.Header>
                        <Dropdown.Item>
                            <i className='dropdown icon'/>
                            <span className='text'>Integrated Tests</span>
                            <Dropdown.Menu>
                                <Link to="/PdfDnDnR"><Dropdown.Item style={{color:"black"}}>Pdf With Drag & Drop</Dropdown.Item></Link>
                                <Link to="/DnDnR"><Dropdown.Item style={{color:"black"}}>DnDnR</Dropdown.Item></Link>
                                <Link to="/TemplateManager"><Dropdown.Item style={{color:"black"}}>TemplateManager</Dropdown.Item></Link>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link to="/about"><Menu.Item>
                    Placeholder
                </Menu.Item></Link>
            </Container>
        </Menu>
    );
}