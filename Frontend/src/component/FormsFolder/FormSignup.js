import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import img from '../images/homee.jpg'

import './Form.css';

const FormSignup = () => {

    // validation part start

    const navigate = useNavigate()

    const [state, setState] = useState({

        username: "",
        email: "",
        password: "",
        password2: "",
        errors: ""

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


            if (nameval.test(state.username) === false) {
                toast.error('please enter valid username', {
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
            if (state.password !== state.password2) {
                toast.error('Password did not match', {
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
                navigate('/createUser')
                axios.post("http://localhost:6655/User/registeruser", state).then((result) => {
                    console.log(result)
                }).catch((err) => {
                    console.log(err)
                })


            }

        }
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    return (

        <div className='form-container'>
            {/* <span className='close-btn'>×</span> */}
            <div className='form-content-left'>
                <img className='form-img' src={img} alt='spaceship' />
            </div>
            <div className='form-content-right'>
                <ToastContainer toastStyle={{ color: "black" }} />
                <form className='form' noValidate>
                    <h1>
                        Get started with us today! Create your account by filling out the information below.
                    </h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Username</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            value={state.username}
                            onChange={handleChange}
                        />
                    </div>
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
                    <div className='form-inputs'>
                        <label className='form-label'>Confirm Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password2'
                            placeholder='Confirm your password'
                            value={state.password2}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="button" onClick={validation} className='form-input-btn' type='submit'>
                        Sign up
                    </button>
                    <span className='form-input-login'>
                        Already have an account? Login <a href='/contact'>here</a>
                    </span>
                </form>
            </div>
        </div>

    );
};

export default FormSignup;