
//import { EmailJSResponseStatus } from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import img from '../component/images/plank.jpg'


import './Enquiry.css';

const Enquiry = () => {

    // validation part start

    // const navigate = useNavigate()

    const [state, setState] = useState({

        fullname: "",
        email: "",
        mobile: "",
        message: ""

    })

    const [status, setStatus] = useState('');

    // const validation = (event) => {

    //     event.preventDefault();

    //     if (state.email === "" || state.mobile === "" || state.message === "") {
    //         toast.error(' please fill all the fields!!!', {
    //             position: "bottom-left",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         });
    //     }
    //     else {
    //         let emailVal = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    //         let mobileVal = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;


    //         if (emailVal.test(state.email) === false) {
    //             toast.error('Please enter valid email', {
    //                 position: "bottom-left",
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });

    //             return;
    //         }

    //         if (mobileVal.test(state.mobile) === false) {
    //             toast.error('Please enter valid phone number', {
    //                 position: "bottom-left",
    //                 autoClose: 2000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //             return;
    //         }
    //         // if (state.message.length > 1) {
    //         //     toast.error('Please enter proper message', {
    //         //         position: "bottom-left",
    //         //         autoClose: 2000,
    //         //         hideProgressBar: false,
    //         //         closeOnClick: true,
    //         //         pauseOnHover: true,
    //         //         draggable: true,
    //         //         progress: undefined,
    //         //     });

    //         //     return;
    //         // }
    //         else {
    //            // navigate('/services')
    //         }

    //     }
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_zdsjqya', 'template_5knzvsq', state, 'user_ZKeb5niwDiDEAI4jmIja3')

            .then(response => {
                console.log('SUCCESS!', response);
                setState({
                    fullname: '',
                    email: '',
                    mobile: '',
                    message: ''
                });
                setStatus('SUCCESS');
            }, error => {
                console.log('FAILED...', error);
            });
    }

    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 1000);
        }
    }, [status]);

    const handleChange = (e) => {
        setState(state => ({
            ...state,
            [e.target.name]: e.target.state
        }))
    }


    return (

        <div className='form-container'>
            <span className='close-btn'>
                <a className="close-btn" href="/home">X</a>
            </span>
            <div className='form-content-right'>
                <img className='form-img' src={img} alt='spaceship' />
            </div>
            <div className='form-content-left'>
                {status && renderAlert()}
                <ToastContainer toastStyle={{ color: "black" }} />
                <form className='form' onSubmit={handleSubmit}>

                    <h1> Fill up the form and our team will contact you shortly </h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Full Name</label>
                        <input
                            className='form-input'
                            type='text'
                            name='fullname'
                            placeholder='Enter your Name'
                            value={state.fullname}
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
                        <label className='form-label'>Mobile number</label>
                        <input
                            className='form-input'
                            type='number'
                            name='mobile'
                            placeholder='Enter your Mobile Number'
                            value={state.mobile}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Message</label>
                        <textarea
                            className='form-input'
                            type='text'
                            name='message'
                            rows='4'
                            placeholder='Enter your Message'
                            value={state.message}
                            onChange={handleChange}
                        />
                    </div>

                    <button className='form-input-btn' type='submit'>
                        Send Message
                    </button>
                    <span className='form-input-login'>
                        Want to join ? Create account <a href='/register'>here</a>
                    </span>
                </form>
            </div>

        </div>
    );
};
const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
        <p>your message submitted successfully</p>
    </div>
)

export default Enquiry;



