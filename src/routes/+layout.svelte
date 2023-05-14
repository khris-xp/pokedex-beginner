<script lang="ts">
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  const title: string = 'Pokedex Beginner';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div class="p-8 max-w-6xl mx-auto">
  <Navbar />
  <slot />
  <Footer />
</div>
