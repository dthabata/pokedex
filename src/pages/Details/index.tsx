import React from 'react';
import {
    MainWrapper,
    DetailsHeaderWrapper,
    DetailsHeader,
    DetailsInfo,
    DetailsImage,
    DetailsText,
    DetailsBodyWrapper,
    Element,
} from './styles';
import { Tabs } from 'antd';
import typeGrass from '../../assets/grass.png';
import typePoison from '../../assets/poison.png';
import AboutPokemon from '../../components/AboutPokemon';
import StatsPokemon from '../../components/StatsPokemon';
import EvolutionPokemon from '../../components/EvolutionPokemon';

const { TabPane } = Tabs;

const Details: React.FC = () => (
    <MainWrapper>
        <DetailsHeaderWrapper>
            <DetailsHeader>
                <DetailsInfo>
                    <DetailsImage>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg"} alt="" />
                    </DetailsImage>
                    <DetailsText>
                        <span>#002</span>
                        <h3>Bulbasaur</h3>
                        <Element>
                            <img src={typeGrass} alt="" />
                            <img src={typePoison} alt="" />
                        </Element>
                    </DetailsText>
                </DetailsInfo>
            </DetailsHeader>
        </DetailsHeaderWrapper>

        <DetailsBodyWrapper>
            <Tabs centered={true}>
                <TabPane tab="About" key="1" className="detail-body-wrapper-sm">
                    <AboutPokemon />
                </TabPane>
                <TabPane tab="Stats" key="2" className="detail-body-wrapper-sm">
                    <StatsPokemon />
                </TabPane>
                <TabPane tab="Evolution" key="3" className="detail-body-wrapper-sm">
                    <EvolutionPokemon />
                </TabPane>
                <TabPane tab="Data insights" key="4" className="detail-body-wrapper">
                    Data insights
                </TabPane>
            </Tabs>
        </DetailsBodyWrapper>
    </MainWrapper>
);

export default Details;
