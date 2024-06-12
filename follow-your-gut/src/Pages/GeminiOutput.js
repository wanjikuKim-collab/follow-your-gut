import React from 'react';
import './output.css'


function GeminiOutput({ aiResponse }) {
  console.log(aiResponse)
  return (
   
    <section className='whitespace-pre-wrap px-16 py-12 flex justify-center'>
      <div className='ai-response' dangerouslySetInnerHTML={{ __html: aiResponse }} />
    </section>
  );
}

export default GeminiOutput;
