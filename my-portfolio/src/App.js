import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import Navbar from './HomePage/Navbar';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import ClassesPage from './ClassesPage/ClassesPage';
import AboutMePage from './AboutMePage/AboutMePage';
import ContactMePage from './ContactMePage/ContactMePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          {/* <Route path="/about" element={<AboutMePage />} /> */}
          <Route path="/contact" element={<ContactMePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

