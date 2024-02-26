import React from 'react'
import './Form.css'

export default function Form() {
    return(
        <div className='form '>
            <h1>Contact Form</h1>
                <label class="form-label">First Name: </label>
                <input type="text" name="" id="" className='form-control'placeholder='John' required/>
                
                <label class="form-label">Last Name: </label>
                <input type="text" name="" id="" className='form-control'placeholder='Doe'/>

                <label class="form-label">Mobile No: </label>
                <input type="text" name="" id=""  className='form-control'/>

                <label class="form-label">Email id: </label>
                <input type="email" name="" id=""  className='form-control'/>

                <label class="form-label">Gender: </label>
                <input type="radio" name="gender" id="" />Male
                <input type="radio" name="gender" id="" />Female
                
                <label class="form-label">Gender: </label>
                <textarea name="address" id="" ></textarea>
                <button type="submit">Submit</button>


        </div>
    )
}