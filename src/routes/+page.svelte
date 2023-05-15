<script lang="ts">
  import { pokemons } from '../stores/pokestore';
  import Card from '../components/Card.svelte';
  import type { IPokemon } from '../interfaces/pokemon';

  let searchTerm: string = '';
  let filteredPokemons: IPokemon[] = [];
  $: {
    if (searchTerm) {
      filteredPokemons = $pokemons.filter((pokemon: IPokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredPokemons = [...$pokemons];
    }
  }
</script>

<div class="p-8 max-w-6xl mx-auto">
  <form class="flex items-center">
    <div class="relative w-full">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          /></svg
        >
      </div>
      <input
        type="text"
        id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-second-color focus:border-second-color block w-full pl-10 p-2.5"
        placeholder="Search Pokemon"
        bind:value={searchTerm}
        required
      />
    </div>
  </form>

  <div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemons as pokemon}
      <Card name={pokemon.name} image={pokemon.image} id={pokemon.id} />
    {/each}
  </div>
</div>
