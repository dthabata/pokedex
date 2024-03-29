import React from 'react';
import { Input, Space, Layout } from 'antd';
import typeGrass from '../../assets/grass.png';
import typePoison from '../../assets/poison.png';
import './styles.css';

const { Search } = Input;
const { Content } = Layout;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const AppContent = () => {
    return (
        <main>
            <Content className="content">
                <Space direction="vertical">
                    <Search
                        placeholder="Catch a Pokémon!"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch} />
                </Space>
            </Content>
            <section className="cards">
                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>
                
                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div>

                <div className="card-info">
                    <span>#002</span>
                    <h3>Bulbasaur</h3>
                    <div className="element">
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </div>
                    <img className="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                </div> 
            </section>
        </main>
    );
}

export default AppContent;
