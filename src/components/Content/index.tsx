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
import { fetchPokemonList, pokemonListReset } from '../../redux/PokemonListReducer';
import { useNavigate } from 'react-router-dom';
import { IPokemon } from '../../interfaces/pokemon-types';
import { pokemonAdd } from '../../redux/PokemonDetailsReducer';

const AppContent: React.FC = () => {
    
    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();
    const pokemonList = useSelector((state: RootState) => state.pokemonList.pokemons)
    const pokemonListRquest = useSelector((state: RootState) => state.pokemonList.pokemonListRquest)

    const onSearch: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>, info?: { source?: 'clear' | 'input' }) => void = (value, _e, info) => {
        const pokemonName = value
    
        dispatch(pokemonListReset())
        dispatch(fetchPokemonList( {offset: 0, limit: 30}))
    };

    useEffect(() => {
        //500 foi uma escolha arbitraria de numero
        const randomOffset = Math.floor(Math.random() * (500 - 1 + 1) + 1);
        dispatch(fetchPokemonList( {offset: randomOffset, limit: 30} )   )
    }, [dispatch]);

    const handleLoadMore = () => {
        dispatch(fetchPokemonList( pokemonListRquest )   )
    }

    const handleLoadPokemonDetail = (pokemon: IPokemon) => {
        console.log(pokemon);
        
        dispatch(pokemonAdd(pokemon))
        navigate(`/details/${pokemon?.name}`);
    }


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
                <StyledCard key={index} 
                    onClick={(event => handleLoadPokemonDetail(pokemon))}>
                    <StyledSpan>#{("000" + pokemon?.id).slice(-3)}</StyledSpan>
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
