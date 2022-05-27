import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navb from './abc/Navb';
import ContactUs from './abc/ContactUs';
import Home from './abc/Home'
import Students from './abc/Students';
import Insert from './abc/Insert';
import Update from './abc/Update';
// import Up from './abc/Up';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navb />
    <Routes>
    <Route index element={<Home/>} />
      <Route path='/students'element={<Students/>} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path='insert' element={<Insert/>} />
      <Route path='update' element={<Update/>} />
      {/* <Route path='up' element={<Up/>} /> */}
    </Routes>
    </BrowserRouter >
    </>
  );
}

export default App;