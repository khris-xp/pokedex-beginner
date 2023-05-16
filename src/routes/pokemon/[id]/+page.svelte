<script lang="ts">
  import { page } from '$app/stores';
  import { getPokemonById } from '../../../stores/pokestore';
  import { onMount } from 'svelte';
  import type { IPokemonDetails } from '../../../interfaces/pokemon';

  let pokemon: IPokemonDetails;
  const id: string = $page.params.id;

  onMount(async () => {
    pokemon = await getPokemonById(id);
  });
</script>

{#if pokemon}
  <div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
    <p class="text-gray-600 mb-4">
      Height: <strong>{pokemon.height}</strong>
      | Weight: <strong>{pokemon.weight}</strong>
    </p>
    <img
      class="w-40 h-40 mb-4"
      src={pokemon.sprites['front_default']}
      alt={pokemon.name}
    />
    <div>
      <h1 class="text-2xl my-5">Types :</h1>
    </div>
    <div class="flex mb-4">
      {#each pokemon.types as type}
        <span
          class="inline-block bg-blue-500 text-white text-base px-2 py-1 rounded-md mr-2 uppercase"
          >{type.type.name}</span
        >
      {/each}
    </div>
    <div>
      <h1 class="text-2xl my-5">Abilities :</h1>
    </div>
    <div class="flex mb-4">
      {#each pokemon.abilities as ability}
        <span
          class="inline-block bg-gray-500 text-white text-base px-2 py-1 rounded-md mr-2 uppercase"
          >{ability.ability.name}</span
        >
      {/each}
    </div>
  </div>
{/if}
