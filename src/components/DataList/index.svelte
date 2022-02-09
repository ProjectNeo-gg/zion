<script>
  export let list;
</script>

<h2 class="text-orange-normal">{list.title}</h2>
<ul class="text-white px-8 pt-2 pb-0 list-disc">
  {#each list.data as listItem}
    <li>{listItem}</li>
  {/each}
</ul>

<style lang="postcss">
  h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 400;
    @apply mt-8;
  }
</style>
