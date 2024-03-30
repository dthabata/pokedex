import React from 'react';
import { Space } from 'antd';
import {
    StyledContent,
    StyledSearch,
    StyledMain,
    StyledSection,
    StyledCard,
    StyledSpan,
    StyledH3,
    StyledElement,
    StyledPokemon
} from './styles.js';
import typeGrass from '../../assets/grass.png';
import typePoison from '../../assets/poison.png';

const onSearch = (value, _e, info) => console.log(info?.source, value);

const AppContent = () => {
    return (
        <StyledMain>
            <StyledContent>
                <Space direction="vertical">
                    <StyledSearch
                        placeholder="Catch a Pokémon!"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </Space>
            </StyledContent>
            <StyledSection>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
                <StyledCard>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>Bulbasaur</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg" alt="" />
                </StyledCard>
            </StyledSection>
        </StyledMain>
    );
};

export default AppContent;
