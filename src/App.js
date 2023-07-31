import logo from './logo.svg';
import './App.css';
import Navbar from './componant/Navbar';
import Footer from './componant/Footer';
import Model from './componant/Model';
import { useState } from 'react';
import PhoneBlock from './componant/Phoneblock';
import MiddleSection from './componant/Middlesection';
function App() {
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
      {/* <PhoneBlock /> */}
    </>
  );
}

export default App;
