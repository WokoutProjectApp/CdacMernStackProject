import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import pushUp from './images/push-ups.jpeg'
import squat from './images/squats.jpg'
import plank from './images/plank.jpg'
import jump from './images/jumpingjack.jpg'
import dumbell from './images/dumbell.jpg'
import yoga from './images/yoga.webp'

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Execises To Start With </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={pushUp}
                            text='For Building Upper Body Strength '
                            label='Push Ups'
                            path='/pushup'
                        />
                        <CardItem
                            src={yoga}
                            text='Focuses on Strength, Fexibility and Breathing to boost Physical and Mental Wellbeing.'
                            label='Yoga'
                            path='/pushup'
                        />
                        <CardItem
                            src={squat}
                            text='Strengthens Your Tendons, Bones, and Ligaments Around the Leg Muscles'
                            label='Squats'
                            path='/pushup'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={dumbell}
                            text='Work Muscle Groups in your Upper Body.'
                            label='Dumbell rows'
                            path='/pushup'
                        />
                        <CardItem
                            src={plank}
                            text=' Strengthens your Body from Head to Toe'
                            label='Plank'
                            path='/pushup'
                        />
                        <CardItem
                            src={jump}
                            text='Jumping jacks are an efficient total-body workout that you can do almost anywhere'
                            label='Jumping Jacks'
                            path='/pushup'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;