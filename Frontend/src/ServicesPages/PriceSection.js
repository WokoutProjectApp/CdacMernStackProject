import React from 'react';
import Footer from '../component/Footer';

import './Prices.css';

function PriceSection() {
    return (
        <>

            <div className="backStyle">
                <h1 style={{ textAlign: "center", paddingTop: 15 }}>Affordable Pricing Plan For You</h1>
                <h4 style={{ textAlign: "center", paddingTop: 10 }}>Choose Your Plan Accordingly</h4>

                <div className="columns">
                    <ul className="price">
                        <li className="header">Gold</li>
                        <li className="grey">Rs.5000 / year</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Cardio</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Weight Lifting</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Aerobics</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>One Protein Kit</li>
                        <li className="grey"><a href="/register" className="button">Get Started</a></li>
                    </ul>
                </div>

                <div className="columns">
                    <ul className="price">
                        <li className="header">Premium</li>
                        <li className="grey">Rs.8000 / year</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Cardio</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Yoga Sessions and Weight Lifting</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Muscle Growth with Aerobics</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Three Protein Kits</li>
                        <li className="grey"><a href="/register" className="button">Get Started</a></li>
                    </ul>
                </div>
                <div className="columns">
                    <ul className="price">
                        <li className="header">Platinum</li>
                        <li className="grey">Rs.12000 / year</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Cardio</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Yoga Session and Full Body Workout</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Diet Plans</li>
                        <li style={{ backgroundColor: 'lightgrey' }}>Five Protein Kits</li>
                        <li className="grey"><a href="/register" className="button">Get Started</a></li>
                    </ul>
                </div>
            </div>
        </>
    );

}

export default PriceSection;