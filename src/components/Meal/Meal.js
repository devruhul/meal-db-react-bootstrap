import React from 'react';
import { Card } from 'react-bootstrap';
import './Meal.css'
const Meal = (props) => {

    const { strMeal, strMealThumb, strInstructions } = props.meal;
    return (
        <div className=' fluid meal-container meal-box'>
            <Card border="info" style={{ width: '18rem' }}>
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 200)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Meal;