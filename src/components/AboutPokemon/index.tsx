import React from 'react';
import {
    AboutInfoSection,
    Heading,
    AboutTable,
    TableKey,
    TableValue,
    AboutImg,
    Gender,
    MaleGender,
    FemaleGender
} from './styles';
import badge1 from '../../assets/badge-1.png';
import badge2 from '../../assets/badge-2.png';
import badge3 from '../../assets/badge-3.png';
import badge4 from '../../assets/badge-4.png';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from '../../redux/index';
import { IPokemon } from '../../interfaces/pokemon-types';

interface PokemonAboutState {
    pokemon: any;
}

const AboutPokemon: React.FC = () => {
    const pokemonDetails = useSelector((state: RootState) => (state.pokemonDetails as PokemonAboutState).pokemon);

    const abilitiesFormat = (abilities: any[] | undefined) =>{
        const list = new Array();
        if (abilities && abilities.length > 0) {
            abilities?.map((ability, index) => ( 
                list.push(ability?.ability?.name)
            ));
        }
        return list.join(', ');
    }

    const typesFormat = (types: any[] | undefined) =>{
        const list = new Array();
        if (types && types.length > 0) {
            types?.map((type, index) => ( 
                list.push(type?.type?.name)
            ))   
        }
        return list;
    }

    return (
        <AboutInfoSection>
            {/* <AboutInfoText>
                Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.
            </AboutInfoText> */}

            <Heading>Pokédex Data</Heading>
            <AboutTable>
                <TableKey>Height</TableKey>
                <TableValue>{pokemonDetails?.height} cm</TableValue>
                <TableKey>Weight</TableKey>
                <TableValue>{pokemonDetails?.weight} g</TableValue>
                <TableKey>Abilities</TableKey>
                <TableValue>{abilitiesFormat(pokemonDetails?.abilities)}</TableValue>
                <TableKey>Type</TableKey>
                <TableValue>{typesFormat(pokemonDetails?.types)}</TableValue>
                
                {/* <TableValue>
                    <AboutImg src={badge1} alt="" />
                    <AboutImg src={badge2} alt="" />
                    <AboutImg src={badge3} alt="" />
                    <AboutImg src={badge4} alt="" />
                </TableValue> */}

            </AboutTable>

            {/* <Heading>Training</Heading>
            <AboutTable>
                <TableKey>EV Yield</TableKey>
                <TableValue>1 Special Attack</TableValue>
                <TableKey>Catch Rate</TableKey>
                <TableValue>45 (5.9% with PokéBall, full HP)</TableValue>
                <TableKey>Base Friendship</TableKey>
                <TableValue>70 (normal)</TableValue>
                <TableKey>Base Exp</TableKey>
                <TableValue>64</TableValue>
                <TableKey>Growth Rate</TableKey>
                <TableValue>Medium Slow</TableValue>
            </AboutTable>

            <Heading>Breeding</Heading>
            <AboutTable>
                <TableKey>Gender</TableKey>
                <TableValue>
                    <Gender>
                        <MaleGender>♀ 87.5%,</MaleGender>
                        <FemaleGender>♂ 12.5%</FemaleGender>
                    </Gender>
                </TableValue>
                <TableKey>Egg Groups</TableKey>
                <TableValue>Grass, Monster</TableValue>
                <TableKey>Egg Cycles</TableKey>
                <TableValue>20 (4,884 - 5,140 steps)</TableValue>
            </AboutTable>

            <Heading>Location</Heading>
            <AboutTable>
                <TableKey>001</TableKey>
                <TableValue>(Red/Blue/Yellow)</TableValue>
                <TableKey>226</TableKey>
                <TableValue>(Gold/Silver/Crystal)</TableValue>
                <TableKey>001</TableKey>
                <TableValue>(FireRed/LeafGreen)</TableValue>
                <TableKey>231</TableKey>
                <TableValue>(HeartGold/SoulSilver)</TableValue>
                <TableKey>080</TableKey>
                <TableValue>(X/Y - Central Kalos)</TableValue>
                <TableKey>001</TableKey>
                <TableValue>(Let's Go Pikachu/Let's Go Eevee)</TableValue>
            </AboutTable> */}
        </AboutInfoSection>
    );
}

export default AboutPokemon;
