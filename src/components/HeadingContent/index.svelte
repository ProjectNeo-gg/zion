<script>
  export let data;
</script>

<h2 class="text-orange-normal">{data.title}</h2>
<p class="text-white px-4 pt-2 pb-0">{@html data.content}</p>

<style lang="postcss">
  h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    @apply mt-8;
  }
</style>
