import React from 'react'
import './Forms.css'
function Forms() {
  return (
    <div className='forms'>
    <h1 className='formsh1'>Please Enter your Details</h1>
    <form action="" className='formsform'>
        <label for="fname" className='formslabel'>Name :</label>
        <input className='formsinput' type="text" id="fname" name="fname" placeholder="Enter your Name" />
        <label for="num" className='formslabel'>Phone No.</label>
        <input className='formsinput' type="number" id="num" placeholder="Enter Your phone number" />
        <label for="tech" className='formslabel'>Technologies Known</label>
        <input className='formsinput' type="text" id="tech" placeholder="Please Enter technologies you known" />
    </form>
    <button className='formsbutton'>Submit</button>
    </div>
  )
}

export default Forms
