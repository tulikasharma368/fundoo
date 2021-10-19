import React, { Component } from 'react';
import '../registration/signup.css';
import '../signin/signin.css';
import '../reset-pass/resetpass.css'
import './forgotmail.css'
import TextField from '@mui/material/TextField';
import { Snackbar, IconButton } from '@mui/material';
import Userservices from '../../services/Userservice'
const obj = new Userservices();

class Fotgotmail extends Component {
	constructor(props){
        super(props);
        this.state={
            mailorphone:"",
            mailorphoneError:false,
			snackbaropen: false, 
            snackbarmsg: ""
        }
    }

	snackbarClose = () => {
        this.setState({snackbaropen: false});
    };

    checkValidation = () => {
        var isError = false;
        const errorsstate = this.state;

        errorsstate.mailorphoneError = this.state.mailorphone !== ''? false : true;

        this.setState({
            ...errorsstate
        })

        
        return isError = errorsstate.mailorphoneError;
    }

    next = () => {
        console.log('inside checkValidation');
        var isValid = this.checkValidation();
        console.log(isValid);
        if(!isValid){
            console.log("validation done"); 
        }
		let forgotObj = {
			"email": this.state.mailorphone
		}
		console.log((forgotObj));
		obj.Forgot(forgotObj)
		.then((response)=>{
			this.setState({snackbaropen:true, snackbarmsg: "Reset mail sent to registered email-id!"});
			console.log(response);
		}).catch(error => {
			this.setState({snackbaropen:true, snackbarmsg: "Invalid email!"});
			console.log(error);
		})
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
					<h2 className='signin change'>Find your email</h2>
					<div className=' recoverymail'><p className='message-signin'>Enter your phone number or recovery mail</p></div>
					<div className='mail-signin-div'>
						<TextField 
						id="mailorphone-signin" 
						name='mailorphone'
						label="Phone number or email" 
						variant="outlined" 
						size='small' 
						error={this.state.mailorphoneError}
                        onChange={e => this.change(e)}
                        helperText={this.state.mailorphoneError ? 'Email or phone number is required' : ''}
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

export default Fotgotmail;
