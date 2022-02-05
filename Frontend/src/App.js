import React from 'react';
import './App.css'

import { Routes, Route } from 'react-router-dom';
import HomeScreen from './component/pages/HomeScreen'
import ServiceScreen from './component/pages/ServiceScreen'
import Navbar from './UsedScreens/Navbar';
import Bmi from './ServicesPages/Bmi';
import Enquiry from './ServicesPages/Enquiry';
import PriceSection from './ServicesPages/PriceSection';
import ReviewSection from './ServicesPages/ReviewSection';
import FormSignup from './component/FormsFolder/FormSignup'
import PushUp from './ExercisesPages/PushUp';
import Setplan from './ServicesPages/setplan';
import ContactForm from './component/FormsFolder/ContactForm';
import Ready from './Ready';
import CreateExercise from './CRUD/CreateExercise';
import CreateUser from './CRUD/CreateUser';
import EditExercise from './CRUD/EditExercise';
import ExercisesList from './CRUD/ExercisesList';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/setplan' element={<Setplan />} />
        <Route path='/Enquiry' element={<Enquiry />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/workout' element={<ExercisesList />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/services' element={<ServiceScreen />} />
        <Route path='/register' element={<FormSignup />} />
        <Route path='/Bmi' element={<Bmi />} />
        <Route path='/Enquiry' element={<Enquiry />} />
        <Route path='/price' element={<PriceSection />} />
        <Route path='/review' element={<ReviewSection />} />
        <Route path='/pushup' element={<PushUp />} />
        <Route path='/createExc' element={<CreateExercise />} />
        <Route path='/edit/:id' element={<EditExercise />} />
        <Route path='/listExc' element={<ExercisesList />} />
        <Route path='/createUser' element={<CreateUser />} />
        {/* ////////////// */}
      </Routes>
    </>
  );
}

export default App;
