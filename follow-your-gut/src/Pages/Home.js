import React from 'react'
import Hero from '../Components/Hero'
import Assessment from './Assessment';
import GeminiOutput from './GeminiOutput';
import GetStarted from '../Components/GetStarted';
import About from './About';
import Features from './Features';
import Reviews from './Reviews'

const Home = ({onSubmit}) => {
  return (
    <div id='home'>
        <Hero/>
        <Assessment onSubmit={onSubmit}/>
        {/* <GeminiOutput aiResponse={aiResponse}/> */}
        <GetStarted/>
        <Features/>
        <About/>
        <Reviews/>
    </div>
  )
}

export default Home