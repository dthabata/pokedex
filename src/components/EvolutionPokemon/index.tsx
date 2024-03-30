import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
    StyledSection
} from './styles';

const EvolutionPokemon: React.FC = () => {
    return (
        <StyledSection>
            <div className="evolution-info-text">
                <h4>Evolution Chart</h4>
            </div>
            <div className="evolution-grid">
                <div className="grid-item">
                <img className="pokemon-evolution" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"} alt="" />
                    <div className="first-evolution">
                        <span>#001</span>
                        <p>Bulbasaur</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="evolving-info">
                        <ArrowRightOutlined />
                        <p>(Level 16)</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img className="pokemon-evolution" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"} alt="" />
                    <div className="first-evolution">
                        <span>#002</span>
                        <p>Ivysaur</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img className="pokemon-evolution" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"} alt="" />
                    <div className="first-evolution">
                        <span>#002</span>
                        <p>Ivysaur</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="evolving-info">
                        <ArrowRightOutlined />
                        <p>(Level 32)</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img className="pokemon-evolution" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"} alt="" />
                    <div className="first-evolution">
                        <span>#003</span>
                        <p>Venusaur</p>
                    </div>
                </div>
            </div>
        </StyledSection>
    );
}

export default EvolutionPokemon;
