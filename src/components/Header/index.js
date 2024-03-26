import React from "react";
import { Layout } from 'antd';
import logo from '../../assets/logo.png';
import './styles.css';

const { Header } = Layout;

const headerStyle = {
    textAlign: 'center',
    height: 200,
    lineHeight: '64px',
    backgroundColor: '#fff',
};

const AppHeader = () => {
    return (
        <Header style={headerStyle}>
            <img className="logo" src={logo} alt="Pokédex Logo" />
        </Header>
    );
}

export default AppHeader;