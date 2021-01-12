import React from 'react'
import Flex from '../common/Flex'
import ParaDown from "../common/Para-down";
import MainList from '../mainCart/MainList';
import NavbarList from '../navbar/Navbar-list';
import './Router.css'


const Dashboard =({context}) => {
    return (
        <div className="dashboard">
            <Flex context={context} />
            <ParaDown  context={context}/>
            <MainList context={context}/>
            <NavbarList context={context}/>
            
        </div>
    )
}

export default Dashboard
