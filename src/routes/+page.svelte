<script lang="ts">
  import { Hit as Metrika } from '$ui/yandex/metrika';
  //import { Icon } from '$ui/iconfy';

  const title = 'DAks • WEB разработка';
  const description = 'DAks DEV: WEB разработка HTML, JS, CSS, Svelte, Tailwind CSS';
</script>

<Metrika
  {title}
  {description} />

<main
  class="flex flex-col justify-center items-center text-center h-screen"
  itemprop="mainContentOfPage">
  <header class="mb-4">
    <h1 class="mb-4 lg:mb-16 text-4xl lg:text-5xl xl:text-7xl !text-slate-400">HTML5 • CSS3 • JS</h1>
    <h2 class="mb-4 lg:mb-8 text-5xl md:text-7xl lg:text-8xl xl:text-9xl dark:text-slate-300 text-shadow">• Svelte •</h2>
    <h2 class="mb-12 lg:mb-24 text-4xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-slate-300 text-shadow">• Tailwind CSS •</h2>
    <h3 class="text-2xl !text-slate-500">&copy; DVA [DAks]</h3>
  </header>
  <a
    rel="noreferrer nofollow"
    class="button whitespace-nowrap hover:text-gray-100 hover:bg-slate-500"
    href="https://kit.svelte.dev"
    target="_blank">
    2022 &star; Svelte.Kit
  </a>
</main>
