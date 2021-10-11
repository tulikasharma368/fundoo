import React from 'react';
import './signup.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import imgsignup from './assets/imgsignup.svg';

const Usersignup = () => {
    return (
        <div className='signup-page'>
            <div className='body-signup'>
                <div className='main-signup'>
                    <p className='fundoo-logo'><span className='f'>F</span><span className='u'>U</span><span className='n'>N</span><span className='d'>D</span><span className='o'>O</span><span className='o2'>O</span></p>
                    <h1 className='create-signup'>Create your Fundoo account</h1>
                    <p>Continue to Fundoo</p>
                    <div className='name-signup'>
                        <div className='textfield'><TextField id="firstName-signip" label="First name" variant="outlined" size='small' /></div>
                        <div className='textfield'><TextField id="lastName-signup" label="Last Name" variant="outlined" size='small'/></div>
                    
                    </div>
                    <div className='user-signup'><TextField id="user-signup" label="Username" variant="outlined" size='small' /></div>
                    <p className='user-text-signup'>You can use letters, symbols and periods</p>
                    <div className='password-signup'>
                    <div className='textfield'><TextField id="password" label="Password" variant="outlined" size='small' /></div>
                    <div className='textfield'><TextField id="confirm" label="Confirm" variant="outlined" size='small' /></div>
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
