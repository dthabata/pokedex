import React, { useEffect } from 'react';
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
} from './styles';
import typeGrass from '../../assets/grass.png';
import typePoison from '../../assets/poison.png';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from '../../redux/index';
import { fetchPokemonList } from '../../redux/PokemonReducer';

interface AppContentProps {}

const onSearch: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>, info?: { source?: 'clear' | 'input' }) => void = (value, _e, info) => {
    console.log(info?.source, value);
};

const AppContent: React.FC<AppContentProps> = () => {
    
    const dispatch: AppDispatch = useAppDispatch();
    const pokemonList = useSelector((state: RootState) => state.pokemonList.pokemons)

    useEffect(() => {
        dispatch(fetchPokemonList())
    }, [dispatch]);

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
            
            {pokemonList.map((pokemon, index) => (
                <StyledCard key={index}>
                    <StyledSpan>#002</StyledSpan>
                    <StyledH3>{pokemon?.name}</StyledH3>
                    <StyledElement>
                        <img src={typeGrass} alt="" />
                        <img src={typePoison} alt="" />
                    </StyledElement>
                    <StyledPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`} alt="" />
                </StyledCard>
                ))}
            
            </StyledSection>
        </StyledMain>
    );
};

export default AppContent;
