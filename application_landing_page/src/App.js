import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Presentation';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title="Comes With All Your Need For Daily Life" button = "Get The App" />
      <Presentation/>
      <About image={aboutimage1} title="Comes With All Your Need For Daily Life" button = "Get The App" />
      <Contact/>
    </div>
  );
}

export default App;
