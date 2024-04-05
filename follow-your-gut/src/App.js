import './App.css';
import Home from './Pages/Home';
import Assessment from './Pages/Assessment';
import GeminiOutput from './Pages/GeminiOutput';
import Navbar from './Layouts/Header/Navbar';
import ContentCard from './Components/AboutContentCard';
import nutritionist from './Assets/nutritionist.png'

import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <Home/>
        <Assessment onSubmit={onSubmit}/>
        {/* <GeminiOutput aiResponse={aiResponse}/> */}
        <ContentCard 
        png_link = {nutritionist}
        header = "Get started with one of our licensed nutritionists"
        section_content = "FYG empowers Kenyans with personalized meal plans using local ingredients. We believe gut health starts with a diverse diet, and aim to unlock its potential for a healthier young local ingredients. We believe gut health starts with a diverse diet, and aim to unlock its potential for a healthier you!"
        png_alt = "nutritionist"
        flex_dir = "flex-row"
        />
    </div>
  );
}

export default App;
