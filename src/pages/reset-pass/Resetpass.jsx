import React, { Component } from 'react';
import '../registration/signup.css';
import '../signin/signin.css';
import './resetpass.css'
import TextField from '@mui/material/TextField';
import { Snackbar, IconButton } from '@mui/material';
import Userservices from '../../services/Userservice';
const obj = new Userservices();

class Forgotpass extends Component {
	constructor(props){
        super(props);
        this.state={
            password:"",
			confirmpassword:"",
			passwordError:false,
			confirmpasswordError:false
        }
    }

	

    checkValidation = () => {
        var isError = false;
        const errorsstate = this.state;

        errorsstate.passwordError = this.state.password !== ''? false : true;
        errorsstate.confirmpasswordError = this.state.confirmpassword !== ''? false : true;

        this.setState({
            ...errorsstate
        })

        
        return isError = errorsstate.passwordError || errorsstate.confirmpasswordError;
    }

    next = () => {
        console.log('inside checkValidation');
        var isValid = this.checkValidation();
        console.log(isValid);
        if(isValid){
            console.log("validation done"); 
			
			let resetpassObj = {
                "newPassword": this.state.password
            }
            console.log((resetpassObj));
            obj.Resetpass(resetpassObj)
            .then((response)=>{
				this.setState({snackbaropen:true, snackbarmsg: "Password changed succesfully"});
				var timer  = setTimeout(function(){
                    window.location = '/'
                }, 1000);
                console.log(response);
            }).catch(function(error){
                console.log(error);
            })
        }
    }
    
	

    change = (e) => {
        // this.next();
        // console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }
	
	render() {
		return (
			<div className='signin-page'>
				<Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}
                    message={<span id="message_id">{this.state.snackbarmsg}</span>}
                    action={[
                    <IconButton key="close" aria-label="Close" color="inherit" onClick={this.snackbarClose}>
                            x
                    </IconButton>
                    ]}
                />
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
						<TextField 
						id="mailorphone-signin" 
						name='password'
						type='password'
						label="New password" 
						variant="outlined" 
						size='small' 
						error={this.state.passwordError}
                        onChange={e => this.change(e)}
                        helperText={this.state.passwordError ? 'Password is required' : ''}
						/>
					</div>
					<div className='pass-signin-div confirmpass-forgotpass'>
						<TextField 
						id="password-signin" 
						name="confirmpass"
						label="Confirm password" 
						type="password"
						variant="outlined" 
						size='small' 
						error={this.state.passwordError}
                        onChange={e => this.change(e)}
                        helperText={this.state.passwordError ? 'Confirm password is required' : ''}
						/>
					</div>
					<div className='next-forgotpass'>
						<button className='next-signup' onClick={this.next}>Next</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Forgotpass;
