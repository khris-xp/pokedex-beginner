<script lang="ts">
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  const title: string = 'Pokedex Beginner';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<Navbar />
<div class="mt-20 mb-40">
  <slot />
</div>
<Footer />
