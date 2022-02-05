import React from 'react';
import '../App.css';
import { Button } from '../UsedScreens/Button';
import './HeroSection.css';
import video from '../component/videos/Gym.mp4'
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
    const navigate = useNavigate()

    const getStarted = () => {
        navigate('/register')
    }

    const watchTrailer = () => {
        navigate('/about')
    }

    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>IT TAKES ALL</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={getStarted}
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={watchTrailer}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;