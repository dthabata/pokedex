import React from 'react';
import { Input, Space, Layout } from 'antd';
import poke1 from '../../assets/pikachu.png';
import './styles.css';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const { Content } = Layout;

const contentStyle = {
    backgroundColor: '#fff',
    textAlign: 'center',
    lineHeight: '100px',
    color: '#fff',
};

const AppContent = () => {
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
                        <a href="www.google.com">Saiba mais</a>
                    </div>
            </section>
        </main>
    );
}

export default AppContent;
