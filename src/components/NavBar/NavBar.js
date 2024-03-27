import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/config';


function NavBar() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  const {user} = useContext(AuthContext)
  const handleLogout = ()=>{
    signOut(auth).then(()=>{
      alert("log out")
      navigate('/login')
    }).catch((error)=>{
      alert('error while log out')
    })
  }
  const handleAccount =()=>{
   
    navigate('/account')
  }
  
  return (
    <div className='navBar'>
      <div >
        <img onClick={()=>navigate('/')} className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />

      </div>
      <div className='right'>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />

        {user ? <>
                <button onClick={handleAccount}  className='btn-signin'>Premium</button>
                <button onClick={handleLogout} className='btn-signup'>Logout</button>
                </>
                :<>
                <button onClick={handleClick} className='btn-signin'>Sign In</button>
                <button onClick={()=>navigate('/signup')} className='btn-signup'>Signup</button>
                </>
      }


      </div>


    </div>
  )
}

export default NavBar