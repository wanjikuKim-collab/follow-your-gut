const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");


const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

//AI code
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
//route for post request to the endpoint gemini
app.post('/gemini', async (req, res) => {
    console.log(req.body.history)
    console.log(req.body.message)
    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    const prompt =
      "Generate a well-balanced weekly meal plan, incorporating locally sourced ingredients from Kenya. Include breakfast, lunch, dinner, and snacks for each day of the week. Present the plan in a tabular format, with days of the week as columns and meals (breakfast, lunch, dinner, snacks) as rows. Additionally, generate a grocery list for the week based on the planned meals and provide links to relevant recipes for each dish.";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text()
    res.send(text)
})

app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`));
