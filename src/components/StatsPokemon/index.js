import React from 'react';
import { Flex, Progress } from 'antd';
import badge1 from '../../assets/badge-1.png';
import './styles.css';

const StatsPokemon = () => {
    return (
        <section className="stats-info">
            <h4>Base Stats</h4>
            <div className="stats-progress">
                <Flex gap="small" vertical>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress percent={50} showInfo={false} />
                </Flex>
            </div>
            <div className="stats-info-text">
                The ranges shown on the right are for a level 100 pokemon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.
            </div>
            <h4>Type Defenses</h4>
            <div className="stats-info-content">
            The effectiveness of each type on Bulbasaur.
            </div>

            <div class="stats-info-skills">
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />

                <p class="random-numbers">2</p>
                <p class="random-numbers">3</p>
                <p class="random-numbers">6</p>
                <p class="random-numbers">2</p>
                <p class="random-numbers">0</p>
                <p class="random-numbers">1</p>
                <p class="random-numbers">0</p>
                <p class="random-numbers">4</p>
                <p class="random-numbers">5</p>

                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />
                <img className="stats-img" src={badge1} alt="" />

                <p class="random-numbers">3</p>
                <p class="random-numbers">0</p>
                <p class="random-numbers">0</p>
                <p class="random-numbers">1</p>
                <p class="random-numbers">2</p>
                <p class="random-numbers">3</p>
                <p class="random-numbers">4</p>
                <p class="random-numbers">4</p>
                <p class="random-numbers">5</p>
            </div>
        </section>
    );
}

export default StatsPokemon;
