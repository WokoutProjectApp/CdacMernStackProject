import React from 'react';
import './ServiceSc.css'
import ServiceItem from './ServiceItem';
import review from '../images/review.png'
import bmi from '../images/bmii.jpg'
import enq from '../images/enq.jpg'
import price from '../images/pp.jpg'
import four from '../images/last.jpg'

const ServiceScreen = () => {

    return (
        <>
            <div className='cardsMain'>
                <h1 className="h1">Our Services </h1>
                <div className='cardsContainer'>
                    <div className='cardsWrapper'>
                        <ul className='Cards__items'>
                            <ServiceItem
                                src={review}
                                text='Check the reviews given by people '
                                label='Reviews'
                                path='/review'
                            />
                            <ServiceItem
                                src={four}
                                text='Various Supplements are provided for body'
                                label='Perks'
                                path='/too'
                            />

                            <ServiceItem
                                src={bmi}
                                text='Calculate your Body Mass Index '
                                label='Body Mass Index'
                                path='/Bmi'
                            />
                        </ul>
                        <ul className='Cards__items'>
                            <ServiceItem
                                src={enq}
                                text='You can ask your question here.'
                                label='Enquiry Section'
                                path='/Enquiry'
                            />
                            <ServiceItem
                                src={price}
                                text='See the prices section'
                                label='Price Section'
                                path='/price'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceScreen;
