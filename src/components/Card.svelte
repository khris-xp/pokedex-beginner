<script lang="ts">
  import { fade } from 'svelte/transition';

  export let name: string, image: string, id: number;
</script>

<a
  class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  href={`/pokemon/${id}`}
  transition:fade
>
  <img class="h-40 w-40" src={image} alt={name} />
  <h2 class="uppercase text-2xl">{id}. {name}</h2>
</a>
