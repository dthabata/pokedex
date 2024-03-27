import React from "react";
import { Layout } from 'antd';
import './styles.css';

const { Header } = Layout;

const AppHeader = () => {
    return (
        <Header className="header">
            <h1>Pokédex</h1>
            <p>Procure o Pokémon pelo nome ou usando o número Pokédex Nacional.</p>
        </Header>
    );
}

export default AppHeader;