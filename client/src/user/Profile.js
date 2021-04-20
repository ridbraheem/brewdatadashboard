import { React, useState } from "react";
import Styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {ProfileContent} from "../components/ProfileContent";
import {Sidebar} from "../components/Sidebar";



const Profile = ({match}) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  const userId = match.params.userId
  
    return (
      <Container>
        <NavBar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        <ProfileContent userId={userId}/>
        <Footer grid="Footer"/>
      </Container>
    );
  };


const Container = Styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: 0.6fr 10fr 1.2fr;
    grid-template-areas:
    "Sidecontainer NavBar"
    "Sidecontainer Content"
    "Footer Footer";
    font-size: 12px;
    text-align: center;
    font-family: 'Poppins', sans-serif;

    @media screen and (max-width: 1024px) {
          grid-template-columns: 1fr;
          grid-template-rows: 0.5fr 0.5fr 9fr 1.2fr;
          grid-template-areas:
            "NavBar"
            "Sidecontainer"
            "Content"
            "Footer";
      }
      
`;

  export default Profile;