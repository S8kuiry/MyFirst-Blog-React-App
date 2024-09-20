
import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup'>
      <h1>Welcome to Blog</h1>

      <form className='signup-form'>

        <h2>SignUp</h2>
        <div className="mb-3" >
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
        </div>
        <div className="mb-3" >
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter password" />
        </div>
        <div className="mb-3" >
          <input type="submit" className="form-control btn btn-success" id="exampleFormControlInput1" value="submit" />
        </div>
        <p>Already have an account?<Link to='/login'>LogIn</Link></p>

      </form>


    </div>
  )
}

export default SignUp
