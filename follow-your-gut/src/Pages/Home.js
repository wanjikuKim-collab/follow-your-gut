import React from 'react'
import Hero from '../Components/Hero'
import Assessment from './Assessment';
import GeminiOutput from './GeminiOutput';
import GetStarted from '../Components/GetStarted';
import About from './About';

const Home = ({onSubmit}) => {
  return (
    <div id='home'>
        <Hero/>
        <Assessment onSubmit={onSubmit}/>
        {/* <GeminiOutput aiResponse={aiResponse}/> */}
        <GetStarted/>
        <About/>
    </div>
  )
}

export default Home