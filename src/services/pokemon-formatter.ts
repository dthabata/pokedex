import { IPokemon } from '../interfaces/pokemon-types';

export const getAbilitiesListByPokemon = (pokemon: IPokemon | undefined) =>{
    const list = new Array();
    if (pokemon?.abilities && pokemon?.abilities.length > 0) {
        pokemon?.abilities?.map((ability: { ability: { name: any; }; }, index: any) => ( 
            list.push(ability?.ability?.name)
        ));
    }
    return list;
}

export const getTypesListByPokemon  = (pokemon: IPokemon | undefined) =>{
    const list = new Array();
    if (pokemon?.types && pokemon?.types.length > 0) {
        pokemon?.types?.map((type: { type: { name: any; }; }, index: any) => ( 
            list.push(type?.type?.name)
        ))
    }
    return list;
}