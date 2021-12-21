import React from 'react';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import about from '../images/about-us.jpg'
const AboutUs = () => {
    return (
        <div className='container'>
            <Header></Header>
            <br />
            <img src={about} alt="" />
            <br /> <br /> <br />
            <p>
                We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients. Meal DB's legacy comes from The parent  Restaurant which was built up in 1963.
            </p>
            <br />
            <p>
                Meal DB was worked for people in general and has advanced into a combination between exquisite chic and contemporary fine charge.
                Enjoy our dazzling dishes and make the most of your eating background with us!
            </p>

            <Footer>
            </Footer>
        </div>
    );
};

export default AboutUs;