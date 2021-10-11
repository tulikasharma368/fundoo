import React from 'react';
import '../registration/signup.css';
import '../signin/signin.css';
import './forgotpass.css'
import TextField from '@mui/material/TextField';

const Forgotpass = () => {
    return (
			<div className='forgotpass-page'>
				<div className='body-forgotpass'>
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
					<h2 className='signin'>Change your password</h2>
					<p className='message-signin'>Enter the new password</p>
					<div className='mail-signin-div'>
						<TextField id="mailorphone-signin" label="New password" variant="outlined" size='small' />
					</div>
					<div className='pass-signin-div'>
						<TextField id="password-signin" label="Confirm password" variant="outlined" size='small' />
					</div>
				</div>
			</div>
    );
}

export default Forgotpass;
