import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import About from './components/AboutMe/AboutMe';
import AboutMe from './components/AboutMe/AboutMe';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/about" element={<AboutMe />} />
                {/* <Route path="/projects" element={<Projects />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
