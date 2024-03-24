import './App.css';
import Home from './Pages/Home';
import Assessment from './Pages/Assessment'
import GeminiOutput from './Pages/GeminiOutput';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';
import Navbar from './Layouts/Header/Navbar';
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
        <Assessment onSubmit={onSubmit}/>}
        <GeminiOutput aiResponse={aiResponse}/>
    </div>
  );
}

export default App;
