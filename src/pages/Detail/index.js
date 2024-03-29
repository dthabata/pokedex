import React from 'react';
import { Tabs } from 'antd';
import typeGrass from '../../assets/grass.png';
import typePoison from '../../assets/poison.png';
import AboutPokémon from '../../components/AboutPokémon';
import StatsPokémon from '../../components/StatsPokémon';
import './styles.css';

const { TabPane } = Tabs; 

const Detail = () => (    
    <main className="flex-detail">
        <section className="detail-header-wrapper">
            <div className="detail-header">
                <div className="detail-info">
                    <div className="detail-image">
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                    </div>
                    <div className="detail-text">
                        <span>#002</span>
                        <h3>Bulbasaur</h3>
                        <div className="element">
                            <img src={typeGrass} alt="" />
                            <img src={typePoison} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className="detail-body">
            
                <Tabs centered="true"> 
                    <TabPane tab="About" key="1" className="detail-body-wrapper-sm"> 
                        <AboutPokémon />
                    </TabPane> 
                    <TabPane tab="Stats" key="2" className="detail-body-wrapper"> 
                        <StatsPokémon />
                    </TabPane> 
                    <TabPane tab="Evolution" key="3" className="detail-body-wrapper"> 
                        Evolution
                    </TabPane>
                    <TabPane tab="Data insights" key="4" className='detail-body-wrapper'> 
                        Data insights
                    </TabPane> 
                </Tabs>
            
        </section>
    </main>
);

export default Detail;
