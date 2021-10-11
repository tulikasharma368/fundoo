import React from 'react';
import '../registration/signup.css';
import '../signin/signin.css';
import '../forgot-pass/forgotpass.css'
import './forgotmail.css'
import TextField from '@mui/material/TextField';

const Fotgotmail = () => {
    return (
      <div className='signin-page'>
				<div className='body-signin'>
					<div>
						<p>
							<span className='f'>F</span>                
							<span className='u'>u</span>
							<span className='n'>n</span>                
							<span className='d'>d</span>
							<span className='o'>o</span>                
							<span className='o2'>o</span>
						</p>
					</div>
					<h2 className='signin change'>Find your email</h2>
					<div className=' recoverymail'><p className='message-signin'>Enter your phone number or recovery mail</p></div>
					<div className='mail-signin-div'>
						<TextField id="mailorphone-signin" label="Phone number or email" variant="outlined" size='small' />
					</div>
					<div className='next-forgotpass'>
						<button className='next-signup'>Next</button>
					</div>
				</div>
			</div>
    );
}

export default Fotgotmail;
