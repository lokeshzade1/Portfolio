import Navbar from './componant/Navbar';
import Footer from './componant/Footer';
import Model from './componant/Model';
import { useState } from 'react';

import MiddleSection from './componant/Middlesection';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import Skill from './componant/Skills';
import Project from './componant/Project';
import Main from './componant/Mainpage';
function App() {
  const [show, setShow] = useState(false);
  const showEvent = () => {
    setShow(!show);
  };
  return (
    <>
      {/* <Navbar show={showEvent} />
      <MiddleSection />
      <Footer />
      {show ? <Model show={showEvent} /> : null}
      <PhoneBlock /> */}

      <Routes>
        <Route exact path='/Project' element={<Project />}></Route>
        <Route exact path='/' element={<Main />}></Route>
        <Route exact path='/Skills' element={<Skill />}></Route>
      </Routes>
    </>
  );
}

export default App;
