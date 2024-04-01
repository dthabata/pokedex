import React, { useEffect } from 'react';
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
import { Tabs, Button, Spin } from 'antd';
import { Routes, Route, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import typeGrass from '../../assets/grass.png';
import typePoison from '../../assets/poison.png';
import AboutPokemon from '../../components/AboutPokemon';
import StatsPokemon from '../../components/StatsPokemon';
import EvolutionPokemon from '../../components/EvolutionPokemon';


import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from '../../redux/index';
import { fetchPokemonDetail } from '../../redux/PokemonDetailsReducer';

const { TabPane } = Tabs;

const Details: React.FC = () => {

    const { name } = useParams();

    const dispatch: AppDispatch = useAppDispatch();
    const pokemonDetails = useSelector((state: RootState) => state.pokemonDetails.pokemon)
    const pokemonDetailsLoading = useSelector((state: RootState) => state.pokemonDetails.loading)
    const pokemonDetailsError = useSelector((state: RootState) => state.pokemonDetails.error)

    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      useEffect(() => {
        //SE O POKEMON NAO EXISTIR CASO DIGITE ERRADO NA URL, VOLTA PARA LISTAGEM
        if (!pokemonDetails && pokemonDetailsError && pokemonDetailsError.length > 0){
            navigate(`/`);
        }
      }, [pokemonDetailsError])

    useEffect(() => {
        if( !pokemonDetails ){
            dispatch(fetchPokemonDetail( String(name) ))
        }
    }, [dispatch]);

    const handleBack = () => {
        navigate(`/`);
    }


    return(
        <>
        {pokemonDetailsLoading
            ?(<div> 
                <Spin size="large" /> 
            </div>)
            :(
            <MainWrapper>
                    <DetailsHeaderWrapper>
                        <DetailsHeader>
                            <Button type="text"  onClick={(event => handleBack())}>VOLTAR</Button>

                            <DetailsInfo>
                                <DetailsImage>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails?.id}.svg`} alt="" />
                                </DetailsImage>
                                <DetailsText>
                                    <span>#{("000" + pokemonDetails?.id).slice(-3)}</span>
                                    <h3>{pokemonDetails?.name}</h3>
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
        )}
        </>
    );
};

export default Details;
