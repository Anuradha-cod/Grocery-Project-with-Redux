import React from 'react'
import Flex from '../common/Flex'
import ParaDown from "../common/Para-down";
import MainList from '../mainCart/MainList';
import NavbarList from '../navbar/Navbar-list';
import './Router.css'


const Dashboard =() => {
    return (
        <div className="dashboard">
            <Flex  />
            <ParaDown  />  
            <MainList />
            <NavbarList />
            
        </div>
    )
}

export default Dashboard
