import React from 'react';
import { Link } from 'react-router-dom';
// import { Nav ,Navbar ,Container} from 'react-bootstrap';
import "./Sty.css";

const Navb=()=> {
    return (
      <>
      <div className='na'>
      <div bg="dark" variant="dark">
      <div className='bar'>
          <ol>
            <Link to="/"><li><b>HOME🏠</b></li></Link>
            <Link to="/Students"><li><b>Students🙍</b></li></Link>
            <Link to="/ContactUs"><li><b>Contact US 📞</b></li></Link>
          </ol>
          
      </div>
    </div>
      </div>
      </>
    )
  }
  export default Navb
