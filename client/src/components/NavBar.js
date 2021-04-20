import React, {useState, useEffect} from "react";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {SiteData} from "./SiteData";
import Dropdown from 'react-bootstrap/Dropdown'
import { signout, isAuthenticated } from '../auth';
import { read} from './apiProfile';


const NavBar = ({ sidebarOpen, openSidebar, history }) => {

  const [lastname, setLastname] = useState([]);

  const { token, user: { _id}} = isAuthenticated();

  const init = _id => {
    read(_id, token).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            setLastname(data.lastname);
        }
    });
};

  useEffect(() => {
    init(_id);
}, []);

  
    return (
        <Nav className="navbar navbar-inverse">
            <div className="container-fluid">
                  <div className="navbar-header" onClick={() => openSidebar()}>
                    <NewFont > {SiteData.company.name} </NewFont>
                  </div>
                <ul className="nav navbar-right">
                <li> <Navname> {lastname}</Navname></li>
                <li> 
                <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <AccountCircleIcon style={{ fontSize: 30 }} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href={`/profile/${_id}`}>{SiteData.links.profile.name}</Dropdown.Item>
                      <Dropdown.Item  
                        onClick={() => 
                            signout(() => {
                                history.push("/");
                                    })
                                } 
                      > {SiteData.links.signout.name} 
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                </ul>
           </div>
      </Nav>
    );
  };

const Nav = Styled.nav`{
    grid-area: NavBar;
    font-family: 'Poppins', sans-serif;
  }
`;



const NewFont = Styled.div`
  float: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #006B3F;

  @media screen  and (min-width: 1024px) {
    font-size: 1.5rem;
    margin: auto;
    display: none;

    }
  }
`;

const Navname = Styled.span`{
  font-size: 1.7rem;
  color: #006B3F;
  font-weight: 500;
}
`; 

export default withRouter(NavBar);