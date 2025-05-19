import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import {login, signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {
// login ekranında bulunan sign in ve sign up butonlarından birinin kalması için bir fonksiyon yazmak gerekiyor bundan dolayı bir fonksiyon oluşturduk.

const [singState, setSingState] = useState("Sign In");
const [name, setName] = useState("");
const [email, setEmail] = useState(""); 
const [password, setPassword] = useState(""); 
const [loading, setLoading] = useState(false);

const user_auth = async (event) => {
  event.preventDefault();
  setLoading(true);
  if(singState === "Sign In"){
    await login(email, password);
  }else{
    await signup(name,email,password);
  }setLoading(false);
}

  return (
    loading?<div className='loading'><img src={netflix_spinner} alt="" /></div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{singState}</h1>
        <form>
          {singState=="Sign Up"?
          <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='your name' />:<></>}
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          <button onClick={user_auth} type='submit'>{singState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {singState=="Sign In"?<p>New to Netflix? <span onClick={()=>{setSingState("Sign Up")}}>Sign Up Now</span></p> :<p>Already have an account? <span onClick={()=>{setSingState("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login 
