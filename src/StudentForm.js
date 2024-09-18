import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
    console.log('StudentForm component mounted');
    const[formData, setFormData] = useState({fname:'',lname:'',dob:'',course:''});

    const [isFormValid, setIsFormValid] = useState(false);
    const navigate=useNavigate();

    useEffect(() => {
      // Basic form validation
      const { fname, lname, dob, course } = formData;
      if (fname && lname && dob && course) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }, [formData]);

    const handleChange =(e) =>{
        console.log(`Input ${e.target.name} changed to ${e.target.value}`);
        setFormData({...formData,[e.target.name]: e.target.value,});
    };

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log('form Data Submitted:',formData);
    // };

    const handleSubmit = async (e) => {
      e.preventDefault();
      // Call the backend API to update the database
      const response = await fetch('/api/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Handle success (e.g., clear the form, show a success message)
      } else {
        // Handle error
      }
    };

    return (
      <div className="form-container">
        <h2 className="form-title">Student Management System</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Course Name:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter course name"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  };
export default StudentForm
