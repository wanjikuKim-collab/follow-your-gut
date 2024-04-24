import './App.css';
import Home from './Pages/Home';
import Navbar from './Layouts/Header/Navbar';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Nutritionist from './Pages/Nutritionist';
import Footer from './Layouts/Footer';

function App() {
   const [aiResponse, setAiResponse] = useState('');
   const navigate = useNavigate();

  const onSubmit = async(data) =>{
    const genAI = new GoogleGenerativeAI('');
    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    const prompt = `Suggest well-balanced and diverse meal plans with days of the week and of the different meals(breakfast,lunch,dinner,snacks) using locally sourced ingredients from Kenya. Use the following information to guide the mealplan:${JSON.stringify(data)}
    Below the meal plan, give a grocery list for the week based on the meal plan. Also provide links to various recipes for meals suggested `
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log("===result", response)
    const text = response.text();
    setAiResponse(text);  
    console.log(data) 
    navigate("/output")
  }
  
  return (
    <div className="App">
      <Navbar/>
      <hr/>
      <Routes>
        <Route path='/' element ={<Home onSubmit={onSubmit}/>}/>
        <Route path='/nutritionist' element={<Nutritionist/>}/>        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
