const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    colors: {
      'main-color' : '#ffcb05',
      'hover-main-color': '#c7a008',
      'second-color': '#2a75bb',
      'hover-second-color': '#3c5aa6',
    },
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;