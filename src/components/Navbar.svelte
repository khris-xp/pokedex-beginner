<script lang="ts">
  import { page } from '$app/stores';
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from 'flowbite-svelte';
</script>

<div class="fixed top-0 w-full">
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src="https://th.bing.com/th/id/R.166c3adb6c3150c596e8fd75aae6fb0a?rik=AgySNAtTku0dxg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f07%2fPok%c3%a9mon_logo.png&ehk=qOQewe8jlQDEb75Dsg5lFydn3LWbIbxRGjIoWlzDcA8%3d&risl=&pid=ImgRaw&r=0"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold">
        Pokedex Beginner
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi
        href="/"
        active={$page.url.pathname === '/' ? true : false}
        nonActiveClass="text-lg text-gray-500 hover:text-hover-main-color"
        activeClass="text-lg text-main-color hover:text-hover-main-color"
        >Home</NavLi
      >
      <NavLi
        href="/about"
        active={$page.url.pathname === '/about' ? true : false}
        nonActiveClass="text-lg text-gray-500 hover:text-hover-main-color"
        activeClass="text-lg text-main-color hover:text-hover-main-color"
        >About</NavLi
      >
    </NavUl>
  </Navbar>
</div>
