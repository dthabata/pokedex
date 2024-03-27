import React, { useState } from 'react';
import { Input, Space, Layout, Button } from 'antd';
import PokemonDetails from '../Modal';
import poke1 from '../../assets/pikachu.png';
import './styles.css';

const { Search } = Input;
const { Content } = Layout;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const contentStyle = {
    backgroundColor: '#fff',
    textAlign: 'center',
    lineHeight: '100px',
    color: '#fff',
};

const AppContent = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <main>
            <Content style={contentStyle}>
                <Space direction="vertical">
                    <Search
                        placeholder="Procure um Pokémon!"
                        allowClear
                        enterButton="Pesquisar"
                        size="large"
                        onSearch={onSearch} />
                </Space>
            </Content>
            <section className="cards">
                    <div>
                        <img src={poke1} alt="" />
                        <h3>Nome do Pokémon</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="www.google.com">Saiba mais</a>
                    </div>

                    <div>
                        <img src={poke1} alt="" />
                        <h3>Nome do Pokémon</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="www.google.com">Saiba mais</a>
                    </div>

                    <div>
                        <img src={poke1} alt="" />
                        <h3>Nome do Pokémon</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="www.google.com">Saiba mais</a>
                    </div>

                    <div>
                        <img src={poke1} alt="" />
                        <h3>Nome do Pokémon</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="www.google.com">Saiba mais</a>
                    </div>

                    <div>
                        <img src={poke1} alt="" />
                        <h3>Nome do Pokémon</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="www.google.com">Saiba mais</a>
                    </div>

                    <div>
                        <img src={poke1} alt="" />
                        <h3>Nome do Pokémon</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" onClick={handleOpenModal}>
                            Abrir Modal
                        </a>
                        <PokemonDetails nome="false" />
                    </div>
            </section>
        </main>
    );
}

export default AppContent;
