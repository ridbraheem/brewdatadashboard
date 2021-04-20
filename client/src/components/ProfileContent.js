import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import Styled from "styled-components";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Input,Submit} from "./Styles";
import { read, update, updateUser } from './apiProfile';
import { isAuthenticated } from '../auth';

export const ProfileContent = ({userId}) => {

    const [values, setValues] = useState({
        firstname:  '',
        lastname: '',
        email: '',
        title: '',
        company: '',
        password: '',
        error: false,
        success: false
    });

   const { firstname, lastname, email, title, company, password, error, success } = values;

   const {token}  = isAuthenticated();

   const init = (userId, token) => {
         read(userId, token).then(data => {
             if (data.error) {
                 setValues({ ...values, error: true });
             } else {
                 setValues({ ...values, 
                    firstname: data.firstname, 
                    lastname: data.lastname, 
                    email: data.email, 
                    title: data.title, 
                    company: data.company,
                    password: data.password });
             }
         });
     };

    useEffect(() => {
        init(userId, token);
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(userId, token, { firstname, lastname, email, title, company, password}).then(data => {
            if (data.error) {
                // console.log(data.error);
                alert(data.error);
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        email: data.email,
                        title: data.title,
                        company: data.company,
                        password: data.password,
                        success: true
                    });
                });
            }
        });
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/user/dashboard" />;
        }
    };

    return (
        <Content> 
                <Left>
                    <Icon> <AccountCircleIcon style={{ fontSize: 140 }} /> </Icon>
                    <Name> {firstname} {lastname} </Name>
                    <Title> {title} </Title>
                    <Company> {company} </Company>
                </Left>
                <InputContainer>
                    <Form>
                        <NewInput value={firstname || ''} onChange={handleChange('firstname')} type="text" name="firstname" placeholder = "First Name" required/>
                        <NewInput value={lastname || ''} onChange={handleChange('lastname')} type="text" name="lastname" placeholder = "Last Name" required/>
                        <NewInput value={email || ''} onChange={handleChange('email')} type="email" name="email" placeholder = "Email" required/>
                        <NewInput value={company || ''} onChange={handleChange('company')} type="text" name = "company" placeholder="Company" required />
                        <NewInput value={title || ''} onChange={handleChange('title')} type="text" name = "title" placeholder="Title" required/>
                        <NewInput value={password || ''} onChange={handleChange('password')} type="password" name = "password" placeholder="Password" required/>
                        <NewSubmit onClick={clickSubmit} type="submit" value="Update Profile" />
                    </Form>
                </InputContainer>
                {redirectUser(success)}
            </Content>
    );
  };

  const Content = Styled.div`{
    background: #FFFFFF;
    grid-area: Content;
    display: grid;
    grid-template-columns: 2fr 7fr;
    grid-gap: 3rem;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        margin: 5rem 1rem;
        
    }
  }
`; 

const Left = Styled.div`{
    background: rgba(154, 155, 156, 0.2);;
    border-radius: 20px;
    margin: 5rem 0 5rem 3rem;

    @media screen and (max-width: 900px) {
        margin: 1rem;
    }
  }
`; 

const Icon = Styled.div`{
    margin: 3rem 0 10rem 0 ;

    @media screen and (max-width: 900px) {
        margin: 1rem;
    }
  }
`; 

const Name = Styled.div`{
    margin: 0.1rem 0 ;
    font-size: 1.2rem;

    @media screen and (max-width: 900px) {
        margin: 1rem;
    }
  }
`; 

const Title = Styled.div`{
    font-size: 1rem;
    margin: 0.5rem 0;

    @media screen and (max-width: 900px) {
        margin: 1rem;
    }
  }
`; 

const Company = Styled.div`{
    font-size: 0.8rem;

    @media screen and (max-width: 900px) {
        margin: 1rem;
    }
  }
`; 

const NewInput = Styled(Input)`
    width: 90%;
    text-align: left;
    font-size: 1rem;
    height: 30%;


    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
        text-align: center;
    }
  }
`;

const NewSubmit = Styled(Submit)`
    width: 90%;
    font-size: 1.2rem;
    font-weight: 400;

    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
        text-align: center;
        margin-top: 1rem;
    }
`;



const InputContainer = Styled.div`{
    background: rgba(154, 155, 156, 0.2);;
    border-radius: 20px;
    margin: 5rem 2rem 5rem 2rem;
    display: grid;


    @media screen and (max-width: 900px) {
        margin: 1rem;
    }

  }
`; 

const Form = Styled.form`{
    margin: 5rem 2rem 5rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr ;
        margin: 0;
    }
  }
`; 
