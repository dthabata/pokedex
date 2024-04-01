import React, { useEffect } from 'react';
import { Space, Spin } from 'antd';
import {
    StyledContent,
    StyledSearch,
    StyledMain,
    StyledSection,
    StyledCard,
    StyledSpan,
    StyledH3,
    StyledElement,
    StyledPokemon,
    AboutInfoText,
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
    const pokemonListRequest = useSelector((state: RootState) => state.pokemonList.pokemonListRequest)
    const pokemonListLoading = useSelector((state: RootState) => state.pokemonList.loading)

    const onSearch: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>, info?: { source?: 'clear' | 'input' }) => void = (value, _e, info) => {
        const pokemonName = value
    
        dispatch(pokemonListReset())
        dispatch(fetchPokemonList({name: pokemonName.toLowerCase(), offset: 0, limit: 30}))
    };

    useEffect(() => {
        // 500 was an arbitrary choice of number
        const randomOffset = Math.floor(Math.random() * (500 - 1 + 1) + 1);
        dispatch(fetchPokemonList( {offset: randomOffset, limit: 30} )   )
    }, [dispatch]);

    const handleLoadMore = () => {
        dispatch(fetchPokemonList(pokemonListRequest));
    }

    const handleLoadPokemonDetail = (pokemon: IPokemon) => {
        // Set the Polémon in the state before the navigation, so this way is not necessary to make any other request to get data
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
            {pokemonListLoading ?
                (<div> 
                    <Spin size="large" /> 
                </div>)
                : (
                    <StyledSection>
                        {
                            pokemonList.map((pokemon, index) => (
                                <StyledCard key={index} 
                                    onClick={(event => handleLoadPokemonDetail(pokemon))}
                                    singleCard={pokemonList.length === 1} // Pass the singleCard prop based on the condition
                                >
                                    <StyledSpan>#{("000" + pokemon?.id).slice(-3)}</StyledSpan>
                                    <StyledH3>{pokemon?.name}</StyledH3>
                                    <StyledElement>
                                        <img src={typeGrass} alt="" />
                                        <img src={typePoison} alt="" />
                                    </StyledElement>
                                    <StyledPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`} alt="" />
                                </StyledCard>
                            ))
                        }
                    </StyledSection>
                )
            }
            {(!pokemonListLoading && pokemonList.length === 0 ) && 
                <AboutInfoText>
                    Pokémon was not found. Please verify if the data is correct.
                </AboutInfoText>
            }
        </StyledMain>
    );
};

export default AppContent;