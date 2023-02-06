import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Error from './components/Error';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>

        {/* this path will show the error page the the parth is not defined */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default App;
