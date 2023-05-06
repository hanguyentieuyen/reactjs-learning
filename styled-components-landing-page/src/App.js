import React from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar, Footer} from './components';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';
function App() {
  return (

    <Router>
      <GlobalStyles/>
      <ScrollToTop/>
      <Navbar />
     
      <Routes>
        <Route path='/' exact element = {<Home/>} />  
        <Route path='/services' exact element = {<Services/>}/>
        <Route path='/products' exact element = {<Products/>}/>
        <Route path='/sign-up' exact element = {<SignUp/>}/>
      </Routes>
     
      <Footer />
    </Router>

  );
}

export default App;
