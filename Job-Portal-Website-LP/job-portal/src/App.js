import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Jobs from './Components/pages/Jobs';
import Features from './Components/pages/Features';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/features' exact element={<Features/>}/>
        <Route path='/jobs' exact element={<Jobs/>}/>
        <Route path='/about' exact element={<About/>}/>
      </Routes>
    
    </BrowserRouter>
 
    </div>
  );
}

export default App;
