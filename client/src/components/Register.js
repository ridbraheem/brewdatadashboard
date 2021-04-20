import React, { useState } from "react";
import Styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Submit, Input, Link} from "./Styles";
import {SiteData} from "./SiteData";
import { signup } from '../auth';

const Register = () => {

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    company: "",
    title: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { firstname, lastname, company, title, email, password, success, error } = values;


  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = e => {
    e.preventDefault();
    //console.log(firstname, lastname, company, title, email, password);
    setValues({ ...values, error: false });
    signup({ firstname, lastname, company, title, email, password}).then(data => {
        if (data.errors) {
            setValues({ ...values, error: data.errors, success: false });
        } else {
            setValues({
                ...values,
                firstname: '',
                lastname: '',
                company: '',
                title: '',
                email: '',
                password: '',
                error: '',
                success: true
            });
        }
    });
  };

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        New account is created. Please <Link to="/signin">Signin</Link>
    </div>
);


    return (
        <Container>
            <LoginContainer>
                <Welcome>
                    {SiteData.messages.createaccount}
                </Welcome>
                <AccountCircleIcon style={{ fontSize: 140 }} />
                <form>
                    <Input value={firstname} onChange={handleChange('firstname')} type="text" name="firstname" placeholder = "First Name" required />
                    <Input value={lastname} onChange={handleChange('lastname')} type="text" name="lastname" placeholder = "Last Name" required  />
                    <Input value={company} onChange={handleChange('company')} type="text" name="company" placeholder = "Company" required />
                    <Input value={title} onChange={handleChange('title')} type="text" name="title" placeholder = "Title" required />
                    <Input value={email} onChange={handleChange('email')} type="email" name="email" placeholder = "Email" required />
                    <Input value={password} onChange={handleChange('password')} type="password" name = "password" placeholder="Password" required  />
                    <Submit onClick={clickSubmit} type="submit" value="Sign Up" />
                </form>
                {showSuccess()}
                {showError()}
                <div> <Link href={SiteData.links.login.path}>{SiteData.links.login.name}</Link> </div>
            </LoginContainer>
        </Container>
    )
};

const Container = Styled.div`
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`;


const Welcome = Styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  color: #00000;

  @media screen  and (max-width: 600px) {
    font-size: 1.5rem;

  }
`;

const LoginContainer = Styled.div`
  text-align: center;
  width: 50%;

  @media screen  and (max-width: 600px) {
    background: #FFFFFF;
    width: 80%;
    margin-bottom: 20%;
  }
`;




export default Register;