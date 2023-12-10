// import '../styles/First.css'
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
import React from 'react'
import 'boxicons'
import '../styles/Login.css'
// import './aac.css'
const Login = () => {
    
    return(
        
   
  <div >
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="Login.css" />
  {/* <link rel="stylesheet" href="aac.css" /> */}
  <div>
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
         <i class='bx bx-user' ></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i class='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember</label>
          <a href="#">Forgot Password</a>
        </div>
        <div >
        <Button type="button" className="btn" style={{marginLeft:40,width:"40"}}>Login</Button>
        </div>
        <div className="register-link">
          <p>dont have an account
            <a href='/Register'> Register</a></p>
        </div>
      </form>
    </div>
  </div>
</div>


  )
}
export default Login
    
