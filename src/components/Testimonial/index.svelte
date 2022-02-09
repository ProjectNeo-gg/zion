<script>
  export let imgName, name, content;
</script>

<div class="flex w-full pt-2">
  <div class="img-wrapper">
    <img src={`./static/${imgName}`} alt={name} class="object-contain w-full h-full" />
  </div>
  <div class="content-wrapper flex flex-col w-full">
    <h4>{name}</h4>
    <p>{content}</p>
  </div>
</div>

<style lang="postcss">
  .img-wrapper {
    @apply inline-block;
    @apply rounded;
    border-width: 4px;
    border-radius: 50%;
    @apply border-orange-normal;
    width: 100px;
    height: 80px;

    @screen md {
      @apply w-64;
    }

    img {
      border-radius: 50%;      
    }
  }
  h4 {
    font-weight: 400;
  }
  p {
    font-weight: 300;
  }
  .content-wrapper {
    @apply p-2;
    @apply text-white;
  }
</style>