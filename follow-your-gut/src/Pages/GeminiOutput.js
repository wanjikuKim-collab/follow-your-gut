//This will hold the output for the Gemini AI - meal plan, grocery list and links to recipe
import React from 'react'

function GeminiOutput({aiResponse}) {
  return (
    <div>{aiResponse}</div>
  )
}

export default GeminiOutput