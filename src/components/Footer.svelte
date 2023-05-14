<script lang="ts">
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
  } from 'flowbite-svelte';
</script>

<Footer>
  <FooterCopyright href="/" by="khris-xp" year={2023} />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="https://web.facebook.com/khris.bharmmano"
      >Facebook</FooterLink
    >
    <FooterLink href="https://www.instagram.com/khris_xp/">Instagram</FooterLink
    >
    <FooterLink href="https://github.com/khris-xp">Github</FooterLink>
  </FooterLinkGroup>
</Footer>
