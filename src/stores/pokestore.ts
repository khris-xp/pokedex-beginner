import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { IPokemon } from "../interfaces/pokemon";

export const pokemons: Writable<IPokemon[]> = writable<IPokemon[]>([]);

const fetchAPI = async (): Promise<void> => {
    const url: string = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const response: Response = await fetch(url);
    const data = await response.json();
    const loadedPokemons: IPokemon[] = data.results.map((pokemon: IPokemon, index: number) => {
        return {
            name: pokemon.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    }
    );
    pokemons.set(loadedPokemons);
}

fetchAPI();