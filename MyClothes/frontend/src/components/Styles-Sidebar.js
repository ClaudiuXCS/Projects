import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData, SidebarData2 } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import { MyText, Img, colors } from './Styles';
import logo from '../images/dress2.png';
import background from '../images/bav.png';

// auth & redux
import { connect } from "react-redux";
import { logoutUser } from "./../authentification/actions/userActions";
import { infoMessage } from "../authentification/actions/userActions";

// React router
import { useHistory } from "react-router-dom";

import {
    ButtonShape,
    ButtonSpace
} from "../components/Styles-Login";


const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height:70px;
    display:flex;
    justify-content: flex-start;
    align-items:center;
`;

const SidebarNav = styled.nav`
    background:linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
  background-position: center;
    width:13%;
    min-height:100vh;
    display: flex;
    justify-content: center;
    position: absolute;
    transition: 350ms;
    z-index:5;
    float:left;
`;


const SidebarWrap = styled.div`
    width:100%;
    @media (max-width: 768px) {
        width:70%;
  }
`;

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    transition: ease-in-out 0.2s;
    border-bottom: 1px solid ${colors.dark};

    &:hover {
        background: rgba(255, 37, 61, 0.3);
        border-left: 5px solid rgb(255, 37, 61);
        letter-spacing: 2px;
        cursor:pointer;
        color: rgb(255, 37, 61);
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
    @media (max-width: 768px) {
        margin-left:-300px;
  }
`;

const DropdownLink = styled(Link)`
    background: rgba(0, 0, 0, 0.1);
    height:60px;
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f4f4f4;
    font-size: 18px;
    border-bottom: 1px solid ${colors.dark};

    &:hover {
        background:rgba(255, 37, 61, 0.1);
        cursor: pointer;
    }

`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    return (
        <div>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}><div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </div>
    )
}


export const Nav = styled.div`
    background: ${colors.dark1}; 
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

const mapStateToProps = ({ session }) => ({
    user: session.user,
  });

export const NavItems = ({user }) => {


    
    return (
     <Nav>
         <Img image={logo} />
        </Nav> 
    )
}

 export const SidebarAdmin = () => {
    return (
            <SidebarNav> 
                <SidebarWrap>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                   
                </SidebarWrap>

            </SidebarNav>
    )
}

export const SidebarBasic = () => {
    return (
            <SidebarNav> 
                <SidebarWrap>
                    {SidebarData2.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                   
                </SidebarWrap>

            </SidebarNav>
    )
}
  
export default connect(mapStateToProps, { logoutUser });