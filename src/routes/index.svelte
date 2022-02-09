<script>
  import Logo from './../components/Logo/index.svelte';
  import DataList from './../components/DataList/index.svelte';
  import HomeImage from './../components/HomeImage/index.svelte';
  import HomeHeading from './../components/HomeHeading/index.svelte';
  import HeadingContent from './../components/HeadingContent/index.svelte';
  import { SubscribeList, ProgramList, NotList, Philosophy, AboutMe } from './../data/lists';

  const lists = [SubscribeList, ProgramList, NotList];
</script>

<div class="bg-purple-dark h-auto w-full p-4">
  <div class="w-full md:w-77rem mx-auto h-full pb-64">
    <Logo />
    <div class="flex items-center">
      <HomeImage />
      <HomeHeading />
    </div>
    {#each lists as list}
      <DataList {list} />
    {/each}
    <HeadingContent data={Philosophy} />
    <HeadingContent data={AboutMe} />
  </div>
</div>
