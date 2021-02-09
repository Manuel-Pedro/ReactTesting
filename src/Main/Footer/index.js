import React from 'react';
import {
    Container,
    List, Menu,
    Segment,
} from 'semantic-ui-react';
import {
    Link
} from 'react-router-dom';

export default function Footer() {
    return (
        <Segment inverted vertical style={{ margin : '2em 0em 0em', padding : '2em 0em' }}>
            <Container textAlign='center'>
                <List horizontal inverted divided link size='small'>
                    <Link to="/"><List.Item as='a' href='#'>
                        Home
                    </List.Item></Link>
                    <List.Item as='a' href='#'>
                        Top of the Page
                    </List.Item>
                </List>
            </Container>
        </Segment>
    );
}