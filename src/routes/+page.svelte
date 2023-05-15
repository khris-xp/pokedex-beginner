<script lang="ts">
  import { pokemons } from '../stores/pokestore';
  import Card from '../components/Card.svelte';
</script>

<div class="p-8 max-w-6xl mx-auto">
  <div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each $pokemons as pokemon}
      <Card name={pokemon.name} image={pokemon.image} id={pokemon.id} />
    {/each}
  </div>
</div>
