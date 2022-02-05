// actual contact screen

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../images/blog-3.jpg'


import './Contact.css';

const ContactForm = () => {

    // validation part start

    const navigate = useNavigate()

    const [state, setState] = useState({


        email: "",
        password: "",

    })

    const validation = (event) => {

        event.preventDefault();

        if (state.username === "" || state.email === "" || state.password === "" || state.password2 === "") {
            toast.error(' please fill all the fields!!!', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            let nameval = /^[A-Za-z]/
            let emailVal = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
            let passVal = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


            if (emailVal.test(state.email) === false) {
                toast.error('Please enter valid email', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                return;
            }

            if (passVal.test(state.password) === false) {
                toast.error('Please enter valid password', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }
            else {
                navigate('/createUser')
            }

        }
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    return (
        <div className='form-container'>
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
                <img className='form-img' src={img} alt='spaceship' />
            </div>
            <div className='form-content-right'>
                <ToastContainer toastStyle={{ color: "black" }} />
                <form className='form' noValidate>

                    <h1> Fill the following details  </h1>

                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="button" onClick={validation} className='form-input-btn' type='submit'>
                        Sign in
                    </button>
                    <span className='form-input-login'>
                        Don't have an account? Create <a href='/register'>here</a>
                    </span>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;