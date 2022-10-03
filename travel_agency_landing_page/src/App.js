import React from "react";
import GlobalStyles from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// import ScrollToTop from './components/ScrollToTop';
import Home from "./pages/HomePage/Home";
import Destination from "./pages/DestinationPage/Destination";
import Pricing from "./pages/PricingPage/Pricing";
import Blog from "./pages/BlogPage/Blog";

function App() {
  return (
    <Router>
      <GlobalStyles />
      {/* <ScrollToTop/> */}
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/destination" exact element={<Destination />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/pricing" exact element={<Pricing />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
