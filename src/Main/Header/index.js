import React from "react";
import {
    Container,
    Dropdown,
    Menu,
} from 'semantic-ui-react'
import {
    Link
} from "react-router-dom";

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
                            <Dropdown.Item>React Rnd</Dropdown.Item>
                            <Dropdown.Item>React Dnd</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>PDF</Dropdown.Header>
                            <Dropdown.Item>Pdf Js</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Others</Dropdown.Header>
                            <Dropdown.Item>
                                <i className='dropdown icon' />
                                <span className='text'>Integrated Tests</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Pdf With Drag & Drop</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to="/about"><Menu.Item>
                        Placeholder
                    </Menu.Item></Link>
                </Container>
            </Menu>
    )
}