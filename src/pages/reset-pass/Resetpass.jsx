import React, { Component } from 'react';
import '../registration/signup.css';
import '../signin/signin.css';
import './resetpass.css'
import TextField from '@mui/material/TextField';

class Forgotpass extends Component {
	render() {
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
					<h2 className='signin change'>Reset your password</h2>
					<p className='message-signin'>Enter the new password</p>
					<div className='mail-signin-div'>
						<TextField id="mailorphone-signin" label="New password" variant="outlined" size='small' />
					</div>
					<div className='pass-signin-div confirmpass-forgotpass'>
						<TextField id="password-signin" label="Confirm password" variant="outlined" size='small' />
					</div>
					<div className='next-forgotpass'>
						<button className='next-signup'>Next</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Forgotpass;
