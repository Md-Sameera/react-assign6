import React , { useState} from 'react';
import { Link } from 'react-router-dom';
import "./Sty.css";

export default function Update() {
    const [udata , setUpdate]= useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdate({...udata, [name]: value});
    }
    const SubmitHandler=(e)=>{

        // const newRecord={...data}
        // setRecord([...records,newRecord]);
        // setData({id:"",FirstName : "" ,LastName:"",UserName:"",batch:""});
        e.preventDefault();
        
    };
    
  return (
    <>
     <form className='form'>
    <br/>
    <br/>
    <label> <b>ID: </b>
       <input type="number" placeholder='Enter first your id' name="ide" value={udata.Ide} onChange={handleChange} />
       </label><br/> <br/>
    <label> <b>First-Name  : </b>
       <input type="text" placeholder='Enter first your name' name="First-Name" value={udata.FirstName} onChange={handleChange} />
       </label><br/> <br/>
    <label><b>Last-Name : </b>
        <input type="text" placeholder='Enter last name' name="Last-Name" value={udata.LastName} onChange={handleChange}  />
        </label><br/> <br/>
    <label> <b>UserName: </b>
        <input type="text" placeholder='Enter your username' name="UserName" value={udata.UserName} onChange={handleChange} />
        </label><br/> <br/> 
    <label><b>Batch: </b>
        <input type="text" placeholder='Enter your batch' name="Batch" value={udata.batch} onChange={handleChange}  />
        </label><br/> <br/><br/>
    <button><Link to={"/Students"}>CANCEL</Link></button>
    <button onClick={SubmitHandler}>
      <Link to={"/Students"} ><b>UPDATE</b></Link>
    </button>
    </form>
    </>
  )
}
