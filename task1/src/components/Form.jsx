import React from 'react'
import './Form.css'

export default function Form() {
    return (
        <div className='container-fluid'>
            <h1>Contact Form</h1>
            <label class="form-label">First Name: </label>
            <input type="text" name="" id="" className='form-control' placeholder='John' required />

            <label class="form-label">Last Name: </label>
            <input type="text" name="" id="" className='form-control' placeholder='Doe' />

            <label class="form-label">Mobile No: </label>
            <input type="text" name="" id="" className='form-control' />

            <label class="form-label">Email id: </label>
            <input type="email" name="" id="" className='form-control' />

            <label class="form-label">Gender: </label>
            <div class="form-check">
                <input type="radio" name="gender" id="" className='form-check-input' /><label className='form-check-label'>Male</label>
            </div>

            <div class="form-check">
                <input type="radio" name="gender" id="" className='form-check-input' /><label className='form-check-label'>Female</label>
            </div>

            <textarea name="address" id="" ></textarea>
            <button type="submit">Submit</button>


        </div>
    )
}