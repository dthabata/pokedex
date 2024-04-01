import React from 'react';
import {
    StyledSection,
    StyledH4,
    StyledText,
    StyledContent,
    StyledSkills,
    StyledImage,
    StyledNumbers,
} from './styles';
import { Flex, Progress } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/index';
import { IPokemonDetailsState } from '../../interfaces/pokemon-types';
import badge1 from '../../assets/badge-1.png';


const StatsPokemon: React.FC = () => {
    const pokemonDetails = useSelector((state: RootState) => (state.pokemonDetails as IPokemonDetailsState).pokemon);
    
    const capitalizeFirstLetter = (string: string | undefined) => {
        if (string === undefined) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
        <StyledSection className="stats-info">
            <StyledH4>Base Stats</StyledH4>
            <div className="stats-progress">
                <Flex gap="small" vertical>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress percent={50} showInfo={false} />
                </Flex>
            </div>
            <StyledText>
                The ranges shown on the right are for a level 100 pokemon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.
            </StyledText>
            <StyledH4>Type Defenses</StyledH4>
            <StyledContent>
                The effectiveness of each type on <strong>{capitalizeFirstLetter(pokemonDetails?.name)}</strong>.
            </StyledContent>
                <StyledSkills>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                    <div className="item">
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </div>
                </StyledSkills>
        </StyledSection>
    );
}

export default StatsPokemon;
