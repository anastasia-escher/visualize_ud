import Home from "./pages/Home";
import Navigation from "./components/pageParts/Navigation";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Footer from "./components/pageParts/Footer";
import * as React from "react";
import VisualizePage1 from "./pages/VisualizePage1";
import About from "./pages/About";
import DataPreparation from "./pages/DataPreparation";


function App() {
  return (
    <>

        <Router>
            <Navigation />
        <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='visualize' element={<VisualizePage1 />} />
            <Route path='about' element={<About/>} />
            <Route path='data-preparation' element={<DataPreparation/>} />

        </Routes>

            <Footer />
            </Router>

    </>
  );
}

export default App;
