import React, {useState} from 'react';
import './sign-in-style.scss';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component.';

import CustomButton from '../custom-button/custom-button..component';


import {googleSigniNStart, emailSigniNStart} from '../../redux/user/user.actions';

const SignIn = ({emailSigniNStart, googleSigniNStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        
        emailSigniNStart(email, password); 
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value})
    }
   
        return (
            <div className = "sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit = {handleSubmit}>
                    <FormInput name= "email" 
                        handleChange ={handleChange}
                        type = "email" value = {email} 
                        label = "Email"
                        required />
                    
                    <FormInput name= "password"
                        handleChange ={handleChange}
                        label = "Password"
                        type ="password" value = {password} required />
                    
                    <div className="buttons">
                        <CustomButton type = "submit"> Sign In </CustomButton>
                        <CustomButton 
                            type = "button"
                            onClick = {googleSigniNStart} isGoogleSignIn> 
                            Sign With Google
                        </CustomButton>
                    </div>
                    
                </form> 
            </div>
        )
    
}

const mapDispatchToProps = dispatch => ({
    googleSigniNStart: () => dispatch(googleSigniNStart()),
    emailSigniNStart: (email, password) => dispatch(emailSigniNStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn); 