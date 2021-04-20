import React from "react";
import {Link} from "./Styles";
import {LogoFont} from "./LogoComponent";
import Styled from "styled-components";
import {SiteData} from "./SiteData";
import CloseIcon from '@material-ui/icons/Close';



export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <Sidecontainer className={sidebarOpen ? "sidebar_responsive" : ""}>
            <ClosedIcon>
                <CloseIcon style={{ fontSize: 25 }} onClick={() => closeSidebar()} />
            </ClosedIcon>
            <div> 
                <Link href={SiteData.company.path}>
                    <NewFont> {SiteData.company.name} </NewFont>
                </Link>
            </div>
            <SidebarLinks>
                <div> <Link href="/user/dashboard"> <LinkFont> {SiteData.links.dashboard.name} </LinkFont></Link> </div>
                <div> <Link href={SiteData.links.company.path}> <LinkFont> {SiteData.links.company.name} </LinkFont></Link> </div>
                <div> <Link href={SiteData.links.support.path}><LinkFont> {SiteData.links.support.name} </LinkFont> </Link>  </div>
                <div> <Link href={SiteData.links.notifications.path}><LinkFont> {SiteData.links.notifications.name} </LinkFont> </Link> </div>
            </SidebarLinks>
      </Sidecontainer>
    );
};

const NewFont = Styled(LogoFont)`
    text-align: left;
    font-size: 1.5rem;
    margin: 5rem 3rem 10rem;



    @media screen and (max-width: 1024px) {
        font-size: 2rem;
    }
  }
`;

const LinkFont = Styled(LogoFont)`
    text-align: left;
    font-size: 0.9rem;
    margin: 3rem 3rem;
    color: #000000;
    font-weight: 600;


    @media screen and (max-width: 1024px) {
        font-size: 1rem;
        text-align: left;
    }
  }
`;

const ClosedIcon = Styled.div`
    float: right;
    margin: 1rem 2rem;



    @media screen and (min-width: 1024px) {
        display: none;
    }
  }
`;



const SidebarLinks = Styled.div`
    font-size: 1.5rem;
    margin: 5rem 0rem;


    @media screen and (max-width: 1024px) {
        font-size: 1rem;
        text-align: left;
    }
  }
`;

  
const Sidecontainer  = Styled.div`{
    background: rgba(154, 155, 156, 0.2);
    grid-area: Sidecontainer;
    


    @media screen  and (max-width: 1024px) {
        display: none;
        background: rgba(154, 155, 156, 0.95);

        &.sidebar_responsive {
            display: inline !important;
            z-index: 9999 !important;
            left: 0 !important;
            position: fixed;
            width: 70%;
            height: 100vh;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
            overflow-y: scroll;
          }
        
    }
  }
`; 

