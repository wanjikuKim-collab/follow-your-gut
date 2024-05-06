import React from 'react';


function GeminiOutput({ aiResponse }) {
  console.log(aiResponse)
  return (
   
    <section>
      {
        aiResponse
      }
    </section>
  );
}

export default GeminiOutput;
