import React from 'react';
import FormInput from '../form-input/form-input.component';

import {auth, createUserProfileDocument} from '../../firebase/firbase.utils';

import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component{
    constructor(){
        super()
        this.state ={
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('passwords dont match');
            return;
        }
        try{
            const{user}= await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: ''

            })
        }catch(error){
            console.error(error)
        }
    };
    handleCHange = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render (){
        const {displayName,email,password,confirmPassword} = this.state;
        return(<div className="sign-up">
            <h2 className="title"> I do not have account</h2>
            <span> Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit = {this.handleSubmit}>
                <FormInput 
                type="text"
                name = 'displayName'
                value ={displayName}
                onChange ={this.handleCHange}
                label="Display Name"
                required
                />
                <FormInput 
                type="email"
                name = 'email'
                value ={email}
                onChange ={this.handleCHange}
                label="Email"
                required
                />
                <FormInput 
                type="password"
                name = 'password'
                value ={password}
                onChange ={this.handleCHange}
                label="Password"
                required
                />
                <FormInput 
                type="password"
                name = 'confirmPassword'
                value ={confirmPassword}
                onChange ={this.handleCHange}
                label="Confirm Password"
                required
                />

              <CustomButton type="submit">SIGN UP</CustomButton>

            </form>

        </div>)
    }
}
export default SignUp;