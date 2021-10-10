import React from 'react';
import '../css/signup.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import logo from '../assets/logo.png';
import imgsignup from '../assets/imgsignup.svg';

const Usersignup = () => {
    return (
        <div className='signup-page'>
            <div className='body'>
                <div className='main-signup'>
                    <img src = {logo} className = "applogo"></img>
                    <h1 className='create-signup'>Create your Fundoo account</h1>
                    <p>Continue to Fundoo</p>
                    <div className='name-signup'>
                    <TextField id="firstName-signip" label="First name" variant="outlined" size='small' />
                    <TextField id="lastName-signup" label="Last Name" variant="outlined" size='small'/>
                    </div>
                    <div className='user-signup'><TextField id="user-signup" label="Username" variant="outlined" size='small' /></div>
                    <p className='user-text-signup'>You can use letters, symbols and periods</p>
                    <div className='password-signup'>
                    <TextField id="password" label="Password" variant="outlined" size='small' />
                    <TextField id="confirm" label="Confirm" variant="outlined" size='small' />
                    </div>
                    <p className='password-condition'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        <FormControlLabel className='show-password' control={<Checkbox />} label="Show password" />
                    <div className='signup-end'>
                        <a href="#" className='link-signup'><p className='instead-signup'>Sign in instead</p></a>
                        <button className='next-signup'>Next</button>
                    </div>
                </div>
                <div className='image-div'>
                    <img src={imgsignup} className='img-signup' />
                </div>
            </div>
        </div>

    );
}

export default Usersignup;
