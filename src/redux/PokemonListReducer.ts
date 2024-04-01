import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPokemonListState, IPokemonListRquest, IPokemon } from '../interfaces/pokemon-types'
import { fetchPokemonListService, fetchPokemonDetailServiceByName } from '../services/pokemon-services'

export const fetchPokemonList = createAsyncThunk("pokemon/fetchPokemonList",
    async ( pokemonListRquest: IPokemonListRquest, thunkAPI) => {
        try {

            if( pokemonListRquest?.name && pokemonListRquest?.name.length > 0 ){
                const pokemon = await fetchPokemonDetailServiceByName(pokemonListRquest?.name);
                return [pokemon]
            }

            return fetchPokemonListService(pokemonListRquest.limit, pokemonListRquest.offset);
        } catch (error) {
            console.log("Failed to fetch Pokémons.");
            return thunkAPI.rejectWithValue("Failed to fetch Pokémons.");
        }
    }
);

const initialState: IPokemonListState = {
    pokemons: [],
    pokemonListRquest: {offset: 0, limit: 30},
    loading: false,
    error: null,
};

export const pokemonListSlice = createSlice({
    name: 'pokemon/list',
    initialState,
    reducers: {
        pokemonListReset: () => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPokemonList.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPokemonList.fulfilled, (state, action) => {
            state.loading = false;    
            state.pokemons.push(...action.payload,);
            state.pokemonListRquest.offset  = state.pokemons.length
        })
        .addCase(fetchPokemonList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Something went wrong';
        });
    },
});


export default pokemonListSlice.reducer;
export const { pokemonListReset } = pokemonListSlice.actions