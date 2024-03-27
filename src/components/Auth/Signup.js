import React, { useState } from 'react'
import './Signup.css'
import { auth } from '../../Firebase/config'
import app from '../../Firebase/config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  // const auth = getAuth();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
        // ...
      }).then(()=>{
        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

  }


  return (
    <div className='home'>
      <div className='netflixIcon'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />

      </div>
      <div className="cont">
        <h1>Sign Up</h1>
        <form >
          <div class="form-group">
            <label for="username">Username:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="username" name="username" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
          </div>
          <button onClick={onSubmit} className='btn' type="submit">Sign Up</button>
        </form>
      </div>


    </div>



  )
}

export default Signup;