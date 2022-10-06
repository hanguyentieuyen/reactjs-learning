import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/pages/home";
import ProductsPage from "./components/pages/products";
import ProductPage from "./components/pages/product";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
