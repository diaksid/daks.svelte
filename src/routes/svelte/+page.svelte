<script lang="ts">
  import { onMount } from 'svelte';
  import { Hit as Metrika } from '$ui/yandex/metrika';

  const title = 'Svelte • DVA';
  const description = 'Фреймворк разработки кибернетически улучшенных веб-приложений Svelte';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<Metrika
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content mb-16">
    <h1 class="mb-2 title">Svelte&nbsp;!</h1>
    <h2>кибернетически улучшенные веб-приложения</h2>
  </header>

  <div class="content pb-16">
    <p>
      <strong>Svelte</strong> это радикально новый подход к созданию пользовательских интерфейсов. В
      то время как традиционные фреймворки, такие как <em>React</em> и <em>Vue</em>, выполняют
      основную часть своей работы в браузере, <b>Svelte</b> переносит эту работу на этап компиляции,
      который происходит при создании вашего приложения.
    </p>
  </div>
</main>
