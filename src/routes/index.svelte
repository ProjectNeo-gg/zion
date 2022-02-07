<script>
  import Logo from './../components/Logo/index.svelte'
  import HomeImage from './../components/HomeImage/index.svelte'
  import HomeHeading from './../components/HomeHeading/index.svelte'
</script>

<div class="bg-purple-dark h-full w-full">
  <div class="w-full md:w-77rem mx-auto">
    <Logo />
    <div class="flex items-center">
      <HomeImage />
      <HomeHeading />
    </div>
  </div>
</div>