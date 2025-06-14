import React, { useState } from 'react';    
import 'milligram/dist/milligram.min.css'
const ContactForm = () => {

    const fromSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData =fromObject; // Get the form data
      
        console.log(formData); // Log the form data to the console (or handle it as needed)
        alert("Form submitted successfully!"); // Alert for demonstration purposes
    }


    const [fromObject, setFromObject] = useState({
        fname: 'shovo',
        lname: '',
        email: '',
        city: '',
        gender:'',
    
    
    })

    const onInputChange = (property,value) => {
        setFromObject({
            ...fromObject,
            [property]: value
        });
  


    }


 

    return (
        <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={fromSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input onChange={(e)=>{onInputChange('fname',e.target.value)}} type="text" id="fname" name="fname" value={fromObject.fname} required />
            <input onChange={(e)=>{onInputChange('lname',e.target.value)}} type="text" id="lname" name="lname" value={fromObject.lname}   required />

            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input onChange={(e)=>{onInputChange('email',e.target.value)}} type="email" id="email" name="email" value={fromObject.email}   required />
            </div>
            
            <div className="form-group">
            <label htmlFor="City">Email:</label>
            <select onChange={(e)=>{onInputChange('city',e.target.value)}} name="city" id="city" value={fromObject.city} required>
        <option value="">Choose city</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Rangpur">Rangpur</option>


            </select>
            </div>

            <div className="form-group">
       
            <input onChange={(e)=>{onInputChange('gender',e.target.value)}}  type="radio" checked={fromObject['gender']==='male'}  name='gender'  />male
            <input onChange={(e)=>{onInputChange('gender',e.target.value)}}   type="radio" checked={fromObject['gender']==='female'}  name="gender"   />Female
            </div>

           

           

            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default ContactForm;