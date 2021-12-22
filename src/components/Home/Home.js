import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../images/carousel-1.png'
import carousel2 from '../images/carousel-2.png'
import carousel3 from '../images/carousel-3.png'
import './Home.css'
const Home = () => {
    return (
        <div>
            <Carousel fade className='container'>
                <Carousel.Item className='meal-image'>
                    <img
                        className="d-block w-100 "
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Tomato Food</h3>
                        <p>Meal DB was worked for people in general and has advanced into a combination between exquisite chic and contemporary fine charge.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={carousel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Salad Food</h3>
                        <p>Enjoy our dazzling dishes and make the most of your eating background with us!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={carousel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Vegetable Food</h3>
                        <p> We welcome you to sit back, unwind and appreciate the lovely sights </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;