<script lang="ts">
  interface Props {
    generation: string;
    details: string;
  }
  export let generation: string, details: string;
</script>

<div class="flex p-4 shadow-md">
  <div class="mr-6">
    <img
      class="mr-6"
      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg"
      alt="team card"
    />
  </div>
  <div class="">
    <p
      class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white"
    >
      {generation}
    </p>
    <p
      class="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200"
    >
      {details}
    </p>
  </div>
</div>
