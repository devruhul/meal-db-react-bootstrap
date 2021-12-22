import React, { useEffect, useState } from 'react';
import './Meals.css'
import Meal from '../Meal/Meal';
import { Card } from 'react-bootstrap';

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div >
            <div className='meal-container' >
                {meals.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                ></Meal>)}
            </div>
            <div>
                <Card>
                    <Card.Header as="h2">Meal DB</Card.Header>
                    <Card.Body>
                        <Card.Title>Meal DB is the restaurant based food api</Card.Title>
                        <Card.Text>
                            Meal DB was worked for people in general and has advanced into a combination between exquisite chic and contemporary fine charge.
                            Enjoy our dazzling dishes and make the most of your eating background with us!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Meals;