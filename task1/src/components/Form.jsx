
import React from 'react'
import './Form.css'
import { useState } from 'react'

export default function Form() {
    const[state, setState]= setState({
        FName:"rhhhhhh",
        LName:"",
        MNo:"",
        EMail:"",

    });

    return (
        <div className='container-fluid'>
            <h1>Contact Form</h1>
            <label class="form-label">First Name: </label>
            <input type="text" name="" id="" className='form-control' placeholder='John' value={state.FName} required onChange={state.FName}/>

            <label class="form-label">Last Name: </label>
            <input type="text" name="" id="" className='form-control' placeholder='Doe' onChange={state.LName} />

            <label class="form-label">Mobile No: </label>
            <input type="text" name="" id="" className='form-control' onChange={state.MNo}/>

            <label class="form-label">Email id: </label>
            <input type="email" name="" id="" className='form-control' onChange={state.EMail}/>

            {/* <label class="form-label">Gender: </label>
            <div class="form-check">
                <input type="radio" name="gender" id="" className='form-check-input' /><label className='form-check-label'>Male</label>
            </div>

            <div class="form-check">
                <input type="radio" name="gender" id="" className='form-check-input' /><label className='form-check-label'>Female</label>
            </div> */}

            {/* <textarea name="address" id="" ></textarea> */}
            <button type="submit">Submit</button>


        </div>
    )
}