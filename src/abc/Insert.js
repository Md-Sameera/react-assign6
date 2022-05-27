import React , { useState } from 'react';
import { Link } from 'react-router-dom';
// import { store } from './Details';
import "./Sty.css";

const Insert=()=> {
    const [fdata, setState]= useState([1]);
    const [data,setNext]=useState([false]);
    const [records, setRecord]= useState([0])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState(values => ({...values, [name]: value}));
      };
       
    const  handleSubmit = (event)=>{
        event.preventDefault();
        const newRecord={...fdata}
        setRecord([...records,newRecord]);
        setState({FirstName: "" ,LastName:"",UserName:"", Batch:""});
        event.preventDefault();
        setNext(true)
       
    };
    const goback = () =>{
      setNext(false);

    }
    // const SubmitHandler = () => {
    //     setStudent([...student,
    //         {
    //             Id: id,
    //             FirstName: firstname,
    //             LastName: lastname,
    //             UserName: username,
    //             Batch: batch,
    //             },
    //         ]);
    //     }
  return (
    <>
    <div>{data ? 
      <form className='form' onSubmit={handleSubmit}>
    <br/>
    <div ><h4> <b>STUDENT DETAILS FORM</b> </h4></div>
    <br/> <br/>
    <label> <b>First-Name  : </b>
       <input type="text" placeholder='Enter first your name' name="First-Name" value={fdata.firstname}  onChange={handleChange} />
       </label><br/> <br/>
    <label><b>Last-Name : </b>
        <input type="text" placeholder='Enter last name' name="Last-Name" value={fdata.lastname}  onChange={handleChange}  />
        </label><br/> <br/>
    <label> <b>UserName: </b>
        <input type="text" placeholder='Enter your username' name="UserName" value={fdata.username}  onChange={handleChange} />
        </label><br/> <br/> 
    <label><b>Batch: </b>
        <input type="text" placeholder='Enter your batch' name="Batch" value={fdata.batch}  onChange={handleChange}  />
        </label><br/> <br/><br/>
    <button><Link to={"/Students"}>CANCEL</Link></button> 
    <button onClick={handleSubmit}>
      <Link to={"/Students"} ><b>ADD STUDENT</b></Link>
    </button>
        
    </form>
  : null }
    </div>
    {data ? null :
     <div>
       <div className='result'>
       {
        records.map((currElem) => {
          
                 return(
                    <div className='data'>
                         <b>First-Name: </b><p> {currElem.FirstName} ||</p> 
                         <b>LastName: </b><p> {currElem.LastName} ||</p> 
                         <b>UserName :</b><p>{currElem.UserName} || </p>
                         <b>Batch: </b><p>{currElem.batch}</p>
                    </div>
                    )
      })
    }
      <br/>
      </div>
     {data?<input id="submit" onClick={goback} type="button" value="Go Back "/>:null }
    {/* {data ? <button ><Link to= {} state={this.props}><b>GO BACK</b></Link> </button> :null } */}
    </div>}
    </>
    
  );
}

export default Insert



