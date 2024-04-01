export interface IPokemonListState {
    pokemons: IPokemon[],
    pokemonListRquest: IPokemonListRquest,
    loading: boolean;
    error: string | null;
}

export interface IPokemonListRquest {
    name?: string,
    offset: number,
    limit: number
}

export interface IPokemonDetailsState {
    pokemon: IPokemon | undefined,
    loading: boolean;
    error: string | null;
}


export interface IPokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    category: any;
    abilities: any;
    types: any;

    //POR UMA LIMITACAO DE TEMPO, NAO FOI FEITO. PORÉM O OBJETO DE RETORNO DEVERIA SER INTEIRAMENTE MAPEADO. ESSE É UM EXEMPLO DO INICIO DO MAPEAMENTO. ALEM DA INTERFACE POKEMON, TODAS AS OUTRAS TAMBEM DEVEM SER MAPEADAS
}

