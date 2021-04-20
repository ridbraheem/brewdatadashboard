import React , { useState } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Input,Submit,Link} from "./Styles";
import {SiteData} from "./SiteData";
import { signin, authenticate} from '../auth';


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false
  });

  const { email, password, loading, error, redirectToReferrer} = values;


  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = e => {
    e.preventDefault();
    //console.log(firstname, lastname, company, title, email, password);
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
                ...values,
                redirectToReferrer: true
            });
          });
        }
    });
  };

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
        {error}
    </div>
  );

  const showLoading = () =>
  loading && (
      <div className="alert alert-info">
          <h2>Loading...</h2>
      </div>
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
        //if (user && user.role === 1) {
            return <Redirect to="/user/dashboard" />;
       // } else {
           // return <Redirect to="/user/dashboard" />;
       // }
    //}
    //if (isAuthenticated()) {
        //return <Redirect to="/" />;
    }
};

    return (
        <Container>
            <LoginContainer>
                <Welcome> {SiteData.messages.welcome} </Welcome>
                <AccountCircleIcon style={{ fontSize: 140 }} />
                <form>
                    <Input value={email} onChange={handleChange('email')}  type="email" name="email" placeholder="Email" size="3rem auto"/>
                    <Input value={password} onChange={handleChange('password')} type="password" name = "password" placeholder="Password" />
                    <Submit onClick={clickSubmit} type="submit" value="Log in"/>
                </form>
                {showLoading()}
                {showError()}
                {redirectUser()}
                <div> <Link href={SiteData.links.forgotpassword.path}>{SiteData.links.forgotpassword.name}</Link> </div>
                <div> <Link href={SiteData.links.signup.path}>{SiteData.links.signup.name}</Link> </div>
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




export default Login;