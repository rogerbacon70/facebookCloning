import LoginPage from '../Login/LoginPage.css'
import React from 'react'
import  Faw from './sdsdj'

const Loginpage = () =>
{
    return(
        <div className='allBody'>
            
            <input type='text' className='inpuT' placeholder='Email Address or Phone Number'></input><br></br><br></br>
            <input type='text' className='inpuT' placeholder='Enter your password'></input><br></br>
            <button className='btnLogin'>Log In</button>
            <a href='{Faw}' ><p className='forgotPass'>Forgotten password?</p></a>

            <button className='newAccount'>Create New Account</button>

            <hr></hr>
           
        </div>
    )
}

export default Loginpage;