import React from 'react'
import './App.css'
import Header from './components/Header'
import Feature from './components/Feature'
import About from './components/About'
import aboutimage from './images/Frame 19.png'
import aboutimage1 from './images/download.png'
import Presentation from './components/Presentation'
import Contact from './components/Contact'
const App = () => {
  return (
    
    <div className='App'>
      
    <Header/>
    <Feature/>
    <About image={aboutimage} title='Comes with all you need for your daily life' button='Get the app'/>
    <Presentation/>
    <About image={aboutimage1} title='Download and get the app now' button='Download'/>
    <Contact/>
    </div>
  ) 
}

export default App
