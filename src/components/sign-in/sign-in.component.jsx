import React from 'react';
import './sign-in-style.scss';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component.';

import CustomButton from '../custom-button/custom-button..component';


import {googleSigniNStart, emailSigniNStart} from '../../redux/user/user.actions';
class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email:'',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {emailSigniNStart} = this.props;
        const {email, password} = this.state;
        emailSigniNStart(email, password)

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email:'', password:''})
        // }catch(error) {
        //     console.log(error);
        // }
        
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    render() {
        const {googleSigniNStart} = this.props;
        return (
            <div className = "sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit = {this.handleSubmit}>
                    <FormInput name= "email" 
                        handleChange ={this.handleChange}
                        type = "email" value = {this.state.email} 
                        label = "Email"
                        required />
                    
                    <FormInput name= "password"
                        handleChange ={this.handleChange}
                        label = "Password"
                        type ="password" value = {this.state.password} required />
                    
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
}

const mapDispatchToProps = dispatch => ({
    googleSigniNStart: () => dispatch(googleSigniNStart()),
    emailSigniNStart: (email, password) => dispatch(emailSigniNStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn); 