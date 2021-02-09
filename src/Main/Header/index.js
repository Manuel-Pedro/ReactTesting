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

                    <Dropdown item simple text='Drag & Drop'>
                        <Dropdown.Menu>
                            <Dropdown.Item>React Rnd</Dropdown.Item>
                            <Dropdown.Item>React Dnd</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                                <i className='dropdown icon' />
                                <span className='text'>Submenu</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to="/about"><Menu.Item>
                        About
                    </Menu.Item></Link>
                </Container>
            </Menu>
    )
}