import React from "react";
import { Layout } from 'antd';
import './styles.css';

const { Header } = Layout;

const AppHeader = () => {
    return (
        <Header className="header">
            <h1>Pokédex</h1>
            <p>Search the Pokémon by its name!</p>
        </Header>
    );
}

export default AppHeader;