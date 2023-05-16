<script lang="ts">
  import { pokemons } from '../stores/pokestore';
  import Card from '../components/Card.svelte';
  import type { IPokemon } from '../interfaces/pokemon';

  let searchTerm: string = '';
  let filteredPokemons: IPokemon[] = [];
  let currentPage = 1;
  const itemsPerPage = 20;
  let displayedPokemons: IPokemon[] = [];

  $: {
    if (searchTerm) {
      filteredPokemons = $pokemons.filter((pokemon: IPokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredPokemons = [...$pokemons];
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayedPokemons = filteredPokemons.slice(startIndex, endIndex);
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
    {#each displayedPokemons as pokemon}
      <Card name={pokemon.name} image={pokemon.image} id={pokemon.id} />
    {/each}
  </div>
  <div>
    {#if !searchTerm}
      <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <a
              href="/"
              on:click|preventDefault={() => {
                if (currentPage > 1) {
                  currentPage--;
                }
              }}
              class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                /></svg
              >
            </a>
          </li>
          <li>
            <a
              href="/"
              on:click={(e) => {
                e.preventDefault();
                currentPage = 1;
              }}
              class={currentPage !== 1
                ? 'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                : 'z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'}
              >1</a
            >
          </li>
          <li>
            <a
              href="/"
              on:click={(e) => {
                e.preventDefault();
                currentPage = 2;
              }}
              class={currentPage !== 2
                ? 'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                : 'z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'}
              >2</a
            >
          </li>
          <li>
            <a
              href="/"
              on:click={(e) => {
                e.preventDefault();
                currentPage = 3;
              }}
              class={currentPage !== 3
                ? 'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                : 'z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'}
              >3</a
            >
          </li>
          <li>
            <a
              href="/"
              on:click={(e) => {
                e.preventDefault();
                currentPage = 4;
              }}
              class={currentPage !== 4
                ? 'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                : 'z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'}
              >4</a
            >
          </li>
          <li>
            <a
              href="/"
              on:click={(e) => {
                e.preventDefault();
                currentPage = 5;
              }}
              class={currentPage !== 5
                ? 'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                : 'z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'}
              >5</a
            >
          </li>
          <li>
            <a
              href="/"
              on:click|preventDefault={() => {
                if (currentPage < 100) {
                  currentPage++;
                }
              }}
              class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                /></svg
              >
            </a>
          </li>
        </ul>
      </nav>
    {/if}
  </div>
</div>
