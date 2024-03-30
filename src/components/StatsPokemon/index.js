import React from 'react';
import { Flex, Progress } from 'antd';
import content1 from '../../assets/content-1.png';
import content2 from '../../assets/content-2.png';
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
            <div className="stats-info-skills">
                <img className="stats-img" src={content1} alt="" />
                <img className="stats-img" src={content2} alt="" />
            </div>
        </section>
    );
}

export default StatsPokemon;
