import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import PokemonReducer from './PokemonReducer';

export const store = configureStore({
    reducer: {
        pokemonList: PokemonReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
