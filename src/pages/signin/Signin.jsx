import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";  
import '../registration/signup.css'
import './signin.css'
import TextField from '@mui/material/TextField';
import Userservices from '../../services/Userservice';
const obj = new Userservices();

// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';



class Signin extends Component {
	constructor(props){
        super(props);
        this.state={
            mailorphone:"",
            password:"",
            mailorphoneError:false,
            passwordError:false,
        }
    }

	

    checkValidation = () => {
        var isError = false;
        const errorsstate = this.state;

        errorsstate.mailorphoneError = this.state.mailorphone !== ''? false : true;
        errorsstate.passwordError = this.state.password !== ''? false : true;

        this.setState({
            ...errorsstate
        })

        
        return isError = errorsstate.mailorphoneError || errorsstate.passwordError;
    }

    next = () => {
        console.log('inside checkValidation');
        var isValid = this.checkValidation();
        console.log(isValid);
        if(!isValid){
            console.log("validation done"); 
			
			let signinObj = {
                "email": this.state.mailorphone,
                "password": this.state.password,
                "service": "advance",
            }
            console.log((signinObj));
            obj.Signin(signinObj)
            .then((response)=>{
				var timer  = setTimeout(function(){
                    window.location = '/dashboard'
                }, 2000);
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
	render(){
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
						<TextField 
						id="mailorphone-signin" 
						name='mailorphone'
						label="Email or phone" 
						variant="outlined" 
						size='small' 
						error={this.state.mailorphoneError}
                        onChange={e => this.change(e)}
                        helperText={this.state.mailorphoneError ? 'Email or phone number is required' : ''}
						/>
					</div>
					<div className='forgot'>
						<Link to='/forgotmail' className='link-signup'><p className='instead-signup forgot-signin'>Forgot e-mail?</p></Link>
					</div>
					<div className='pass-signin-div'>
						<TextField 
						id="password-signin" 
						name='password'
						label="Password" 
						type='password'
						variant="outlined" 
						size='small' 
						error={this.state.passwordError}
                        onChange={e => this.change(e)}
                        helperText={this.state.passwordError ? 'Password is required' : ''}
						/>
					</div>
					<div className='forgot'>
						<a href="#" className='link-signup'><p className='instead-signup forgot-signin'>Forgot password?</p></a>
					</div>
					<div className='signup-end'>
						<Link className='link-signup' to='/signup'><p className='instead-signup'>Create account</p></Link>
						<a href="#" className='link-signup'><button className='next-signup' onClick={this.next}>Next</button></a>
          </div>
				</div>
			</div>
		);
	}
}

export default Signin;

