import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { IPokemon } from "../interfaces/pokemon";

export const pokemons: Writable<IPokemon[]> = writable<IPokemon[]>([]);
const pokemonDetails: { [key: string]: IPokemon } = {};

const fetchAPI = async (): Promise<void> => {
    const limitPage: number = 150;
    const url: string = `https://pokeapi.co/api/v2/pokemon?limit=${limitPage}`;
    const response: Response = await fetch(url);
    const data = await response.json();
    const loadedPokemons: IPokemon[] = data.results.map((pokemon: IPokemon, index: number) => {
        return {
            name: pokemon.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        };
    });
    pokemons.set(loadedPokemons);
};

export const getPokemonById = async (id: string) => {
    if (pokemonDetails[id]) return pokemonDetails[id];
    try {
        const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res: Response = await fetch(url);
        const data = await res.json();
        pokemonDetails[id] = data;
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

fetchAPI();