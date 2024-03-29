import React from 'react';
import { Tabs } from 'antd';
import typeGrass from '../../assets/grass.png';
import typePoison from '../../assets/poison.png';
import './styles.css';

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
            <Tabs
                defaultActiveKey="1"
                centered
                items={[
                    {
                        label: 'About',
                        key: '1',
                        children: 'About',
                    },
                    {
                        label: 'Stats',
                        key: '2',
                        children: 'Stats',
                    },
                    {
                        label: 'Evolution',
                        key: '3',
                        children: 'Evolution',
                    },
                ]}
            />
        </section>
    </main>
);

export default Detail;