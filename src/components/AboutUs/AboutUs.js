import React from 'react';
// import Footer from '../shared/Footer/Footer';
import about from '../images/about-us.jpg'
// import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className='container'>
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
            {/* For under standing props.children */}
            {/* <Footer>
                 <Link to="/">
                    <button>Home</button>
                </Link> 
            </Footer> */}
            
        </div>
    );
};

export default AboutUs;