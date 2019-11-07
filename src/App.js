import React from 'react';
import Navbar from './Components/Navbar'
import Slide from './Components/Slide';
import Inform from './Components/inform';
import AboutSite from './Components/AboutSite';
import GifBlock from './Components/GifBlock';
import TextBlock from './Components/TextBlock';
import './App.css';


function App() {
   return(
     <div>
       <Navbar />
       <Slide />
       <Inform />
       <AboutSite />
       <GifBlock />
      
     </div>
   )
}

export default App;
