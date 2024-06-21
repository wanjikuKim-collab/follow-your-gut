const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');

//Load environment variables from .env file
dotenv.config();


const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());


//route for post request to the endpoint gemini
app.post('/gemini', async (req, res) => {
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
    console.log(req.body.history)
    console.log(req.body.message)

    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    const prompt =
    `
    Generate a well-balanced weekly meal plan, incorporating locally sourced ingredients from Kenya.
    Use the following information to guide the meal plan:${JSON.stringify(req.body.message)}.
    Include breakfast, lunch, dinner, and snacks for each day of the week.
    Present the plan in a tabular format, with days of the week as columns and meals (breakfast, lunch, dinner, snacks) as rows.
    Additionally, generate a grocery list for the week based on the planned meals and provide links to relevant recipes for each dish.
    Return the output in html form. Give me the macros of what I'm consuming`;
    
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);

      res.send(text);
  } catch (error) {
      console.error('Error generating content:', error);
      res.status(500).send('An error occurred while generating the content.');
  }
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));