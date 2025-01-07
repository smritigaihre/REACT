import React, { useState, useEffect } from 'react'
import FormExample from './FormValidation';

//Hooks: useState, useEffect, useContext, etc.

 const Form = (props) => {
    const [formData, setFormData] = useState({})
    // const[error, setError] = useState();

    const onFormInputChange =(e) =>{
        // e.target.name, e.target.value, e.target.checked, e.target.type
        const{name,value,checked,type}= e.target;
        setFormData({
            ...formData,
            [e.target.name]:e.target.type ==='checkbox'? e.target.checked : e.target.value
        })

    }
    // const validation =()=>{
    //   let error ={};
    //   let isValid = true;

//useEffect

useEffect(() => {
  console.log('Email and password hook called');
}, [formData.email, formData.password]
)

useEffect(() => {
  console.log('Address hook called');
}, [formData.address]
)
    
    

    
     // const[email, setEmail]= useState('');
    // const[password, setPassword]= useState('');
    // const[address, setAddress]= useState('');
    // const[state, setState]= useState('');
    // const[checkMeOut, setCheckMeOut] = useState(false);
    


    // const onClickEmail=(e)=>{
    
    //     setEmail(e.target.value)
    // }

    // const onPasswordInput =(p) => {
    //     setPassword(p.target.value)
    // }
    // const onAddress =(p) => {
    //     setAddress(p.target.value)
    // }
    // const onState=(s) =>{
    //     setState(s.target.value)
    // }
    // const onCheckMeOut =(c) =>{
    //     console.log(c.target.checked);
    // }
    const onSignIn =(s) =>{
        s.preventDefault();
        console.log(formData);
        props.onSignInClick(formData)
    //     const data ={
    //         'email': email,
    //         'address':address

    //     }
    //     console.log(
    //         email,
    //         password,
    //         address,
    //         state,
    //         checkMeOut
    //     )
    //     props.onSignInClick(data)

    }
    
  return (

    <div className='container'>
        <div className='row'>
            <div className='col-4 offset-3'>

            <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Email
    </label>
    <input onChange={onFormInputChange} name='email' type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">
      Password
    </label>
    <input onChange={onFormInputChange} name='password' type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">
      Address
    </label>
    <input onChange={onFormInputChange} name='address'
      type="text"
      className="form-control"
      id="inputAddress"
      placeholder="1234 Main St"
    />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">
      Address 2
    </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div>
  <FormExample/>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">
      City
    </label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">
      State
    </label>
    <select onChange={onFormInputChange} name='state' id="inputState" className="form-select">
      <option selected="">Choose...</option>
      <option>Bagmati</option>
      <option>Gandaki</option>
      <option>Koshi</option>
      <option>Lumbini</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">
      Zip
    </label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input onChange={onFormInputChange} name= 'check'className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" onClick={onSignIn}className="btn btn-primary">
      Sign in
    </button>
  </div>
</form>
            </div>
        </div>
    </div>
   
 

  )
}
export default Form;

