import React from 'react';
import '../registration/signup.css'
// import Signup from '../registration/UserSignup.jsx'
import './signin.css'
import TextField from '@mui/material/TextField';

const Signin = () => {
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
					<h2 className='signin'>Sign in</h2>
					<p className='message-signin'>Continue to Fundoo</p>
					<div className='mail-signin-div'>
						<TextField id="mailorphone-signin" label="Email or phone" variant="outlined" size='small' />
					</div>
					<div className='forgot'>
						<a href="#" className='link-signup'><p className='instead-signup forgot-signin'>Forgot e-mail?</p></a>
					</div>
					<div className='pass-signin-div'>
						<TextField id="password-signin" label="Password" variant="outlined" size='small' />
					</div>
					<div className='forgot'>
						<a href="#" className='link-signup'><p className='instead-signup forgot-signin'>Forgot password?</p></a>
					</div>
					<div className='signup-end'>
						<a href="#" className='link-signup'><p className='instead-signup'>Create account</p></a>
						<a href="#" className='link-signup'><button className='next-signup'>Next</button></a>
          </div>
				</div>
			</div>
    );
}

export default Signin;
