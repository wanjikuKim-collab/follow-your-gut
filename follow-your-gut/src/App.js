import Home from "./Pages/Home";
import Navbar from "./Layouts/Header/Navbar";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nutritionist from "./Pages/Nutritionist";
import Footer from "./Layouts/Footer";

function App() {
  //  const [aiResponse, setAiResponse] = useState('');
  const [history, setHistory] = useState([]);

  // const navigate = useNavigate();

  async function onSubmit(data) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        history: history,
        message: data,
      }),
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await fetch("http://localhost:8000/gemini", options);
    let text = await response.text();
    console.log(text);

    // remove /n characters and ```html
    text = text
      .replace(/\\n/g, "")
      .replace(/```html/g, "")
      .replace(/```/g, "")
      .replace(/Grocery List/, '<strong>Grocery List</strong>');
      text = text.replace(/\s{2,}/g, ' ').trim();// trim extra space

        // Update history with the cleaned text

      setHistory((oldTextHistory) => [...oldTextHistory, text]);
    // navigate("/output")
  }

  return (
    <div className="App">
      <Navbar />
      <hr />
      <Routes>
        <Route
          path="/"
          element={<Home onSubmit={onSubmit} history={history} />}
        />
        <Route path="/nutritionist" element={<Nutritionist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
