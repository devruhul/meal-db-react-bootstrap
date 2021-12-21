import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Footer = (props) => {
    return (
        <div>
            <Card className='container'>
                <Card.Header as="h2">Meal DB</Card.Header>
                <Card.Body>
                    <Card.Title>Meal DB is the restaurant based food api</Card.Title>
                    <Card.Text>
                        Meal DB was worked for people in general and has advanced into a combination between exquisite chic and contemporary fine charge.
                        Enjoy our dazzling dishes and make the most of your eating background with us!
                    </Card.Text>
                    <Button variant="primary"> Plese go to meals section and check out our food</Button>
                    {props.children}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Footer;