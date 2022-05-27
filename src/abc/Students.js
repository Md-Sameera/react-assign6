import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Sty.css";

const Students=(props) => {
  const [records]= useState()
  return (
      <>
    <div className='stu'>
        <h1 className='sd'>Students Details</h1>
        <button ><a href='/Insert'> Add New Student🙍</a></button>
    </div>
    <div className='tab'>
    <table>
  <thead>
    <tr>
      <th>sl/no:</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Batch</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>August</td>
      <td><Link to="/Update">Edit</Link></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>August</td>
      <td><Link to="/Update">Edit</Link></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td> the Bird</td>
      <td>@bird</td>
      <td>August</td>
      <td><Link to="/Update">Edit</Link></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Jack</td>
      <td>neau</td>
      <td>@jacky</td>
      <td>August</td>
      <td><Link to="/Update">Edit</Link></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Bob</td>
      <td>Ton</td>
      <td>@Bobby</td>
      <td>August</td>
      <td><Link to="/Update">Edit</Link></td>
    </tr>
     
  </tbody>
  <tbody>
      {records &&
      records.map((currElem ) => {
          return <tr key={records.id}>
              
              <td > {currElem.FirstName}</td>
              <td> {currElem.LastName}</td>
              <td>{currElem.UserName}</td>
              <td>{currElem.batch}</td>
              
          </tr>
      })
      }


      </tbody>
</table>
    </div>
    </>
  )
}
export default Students