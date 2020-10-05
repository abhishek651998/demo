import React from 'react';
import './App.css';
import Background from "./components/Backgroung"
import Image from "./components/Image"
import Features from "./components/Features"
import Details from "./components/Details"
import Description from "./components/Description"
import Summery from "./components/Summery"
import Footer from "./components/Footer"


function App() {
  return (
    < >
    
    <Background />
    <Summery />
    <Image name="ram" /> 
    <Features />
    <Details />
    <Description />
    <Footer />
   </>
  );
}

export default App;
