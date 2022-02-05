import React, { useState } from 'react'

import './Bmi.css'

function Bmi() {

    // state
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')



    let calcBmi = (event) => {
        //prevent submitting
        event.preventDefault()

        if (weight === 0 || height === 0) {
            alert('Please enter a valid weight and height')
        } else {
            let bmi = (weight / Math.pow((height / 100), 2))
            setBmi(bmi.toFixed(1))

            // Logic for message

            if (bmi < 18) {
                setMessage('You are underweight')
            }
            else if (bmi >= 18 && bmi <= 25) {
                setMessage('You have normal weight')
            }
            else if (bmi >= 25 && bmi <= 29) {
                setMessage('You are a over weight')
            }
            else if (bmi >= 30 && bmi <= 35) {
                setMessage('You have obese health')
            }
            else {
                setMessage('You are overweight')
            }
        }
    }

    //  show image based on bmi calculation
    let imgSrc;

    if (bmi < 1) {
        imgSrc = null
    } else {
        if (bmi < 18) {
            imgSrc = require("../component/images/underweight.jpg")
        }
        else if (bmi >= 18 && bmi <= 25) {
            imgSrc = require("../component/images/normal.jpg")
        }
        else if (bmi >= 25 && bmi <= 29) {
            imgSrc = require("../component/images/fat.jpg")
        }
        else if (bmi >= 30 && bmi <= 35) {
            imgSrc = require("../component/images/fat.jpg")
        }
        else {
            imgSrc = require("../component/images/fat.jpg")
        }
    }

    let reload = () => {
        window.location.reload()
    }

    return (
        <div className="app">
            <div className='container'>
                <h2 className='center'>BMI Calculator</h2>
                <form onSubmit={calcBmi}>
                    <div>
                        <label style={{ color: "white" }}>Weight (kg)</label>
                        <input value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div>
                        <label style={{ color: "white" }}>Height (in.cms)</label>
                        <input value={height} onChange={(event) => setHeight(event.target.value)} />
                    </div>
                    <div>
                        <button className='btnClass' type='submit'>Submit</button>
                        <button className='btnClass btn-outline' onClick={reload} type='submit'>Reload</button>
                    </div>
                </form>

                <div className='center'>
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{message}</p>
                </div>

                <div className='img-container'>
                    <img src={imgSrc} alt=''></img>
                </div>
            </div>
        </div>
    );
}

export default Bmi;