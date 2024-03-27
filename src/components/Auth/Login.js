import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import Home from '../Home/Home'
import { auth } from '../../Firebase/config'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login({ value }) {
  const [state, setState] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        
        navigate('/')
        alert('welcome user')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
      <div className='home'>
        <div className='netflixIcon'>
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />

        </div>

        <div className="container2">

          <h1>Login</h1>

          <form>
            <div className="form-group">
              <label for="email">Email:</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
            </div>
            <button onClick={handleLogin} className='btn' type="submit">Login</button>
          </form>
          <p onClick={() => navigate('/signup')}>Don't have an account? Sign up</p>
        </div>

      </div>

    </div>
  )
}

export default Login