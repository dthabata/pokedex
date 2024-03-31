import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPokemonList = createAsyncThunk<string[], void, { rejectValue: string }>(
    "pokemon/fetchPokemonList",
    async (_, thunkAPI) => {
        try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=300");
        const data = await response.json();

        const pokemonResp = await Promise.all(data.results.map(async (pokemon:any) => {
            const response = await fetch(pokemon?.url);
            return await response.json();
        }))

        return pokemonResp;
        
        } catch (error) {
        return thunkAPI.rejectWithValue("Failed to fetch Pokémons.");
        }
    }
);

interface PokemonListState {
    pokemons: any[] ;
    loading: boolean;
    error: string | null;
}

const initialState: PokemonListState = {
    pokemons: [],
    loading: false,
    error: null,
};

export const pokemonListSlice = createSlice({
    name: 'pokemon_list',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPokemonList.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchPokemonList.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemons = action.payload;
        })
        .addCase(fetchPokemonList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export default pokemonListSlice.reducer;
