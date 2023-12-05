import React,{useEffect, useState} from 'react'
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
// import { getApplicant } from '../Redux/Applicant/Action';
import { Table, Container } from 'react-bootstrap';


const List = () => {

    const [user, setUser] = useState([]);

    useEffect(()=> {
        axios
          .get("https://server-medf.onrender.com/applicant/getallapplicants")
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        // dispatch(getApplicant());    
    }, []);
    
    // const data = useSelector((state)=> state.applicant);
    console.log(user.data)
    
    if (!user?.data || user.data.length === 0) {
      return <div className="mt-4"><h4 className='text-dark'>You have no Applicant!!</h4></div>;
    }
    

  return (
    <div className="table-responsive px-2 mt-4">  {/* Wrap table inside this div for responsiveness */}
    <Table className=' table table-bordered' responsive = "sm">
       <thead>
          <tr className="text-center tabrow ">  {/* Center align table headings */}
              <th>Sr. No.</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Hobbies</th>
              <th>State</th>
              <th>Address</th>
              <th>Resume</th>
          </tr>
       </thead>
       <tbody>
          {user?.data?.map((applicant,ind)=>{
              return(
                  <tr key={ind}>
                      <td>{++ind}</td>
                      <td>{applicant.name}</td>
                      <td>{applicant.dob}</td>
                      <td>{applicant.gender}</td>
                      <td>{applicant.hobbies}</td>
                      <td>{applicant.state}</td>
                      <td>{applicant.address}</td>
                      <td>
                        {/* Use the btn class for styling links */}
                        <Link className='btn btn-outline-primary btn-sm' to={`https://server-medf.onrender.com/uploads/${applicant.resume}`} >
                          {applicant.resume}
                        </Link>
                      </td>
                  </tr>
              );
          })}
       </tbody>
    </Table>
  </div>
  )
}

export default List
