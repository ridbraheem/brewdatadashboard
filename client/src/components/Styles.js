import Styled from "styled-components";

export const Submit = Styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: #006B3F;
  color: #FFFFFF;
  border-radius: 20px;
  border-style: none;
  margin: auto auto 3rem auto ;
`;


export const Input = Styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  text-align: center; 
  width: 100%;
  border-style: none none solid none;
  background: None;
  border-color: black;
  font-size: 1 rem;
  &:focus {
    outline: none;
}
&::-webkit-input-placeholder{
    color: Black;
}
&::-ms-input-placeholder{
    color: Black;
}
&::placeholder{
    color: Black;
}

`;

export const Link = Styled.a`
  font-size: 0.9rem;
  color: #006B3F;
  width: 100%;
  margin: auto auto 1rem auto ;
  &:hover, :active{
    color: #006B3F;
}
&:hover, :active, :link{
    text-decoration: none;
}

`;


