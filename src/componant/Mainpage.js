import Navbar from '../componant/Navbar';
import Footer from '../componant/Footer';
import Model from '../componant/Model';
import { useState } from 'react';
import MiddleSection from '../componant/Middlesection';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import Skill from '../componant/Skills';
function Main() {
  const [show, setShow] = useState(false);
  const showEvent = () => {
    setShow(!show);
  };
  return (
    <>
      <Navbar show={showEvent} />
      <MiddleSection />
      <Footer />
      {show ? <Model show={showEvent} /> : null}
    </>
  );
}

export default Main;
