<script lang="ts">
  import { onMount } from 'svelte';
  import type { MenuItem, NavLink } from 'daks-svelte';
  import { YandexMetrikaHit, Dropdown, Select } from 'daks-svelte';
  
  const items: (MenuItem | NavLink)[][] = [
    [{ label: 'Пункт 0 0', href: '' }],
    [
      { label: 'Пункт 1 0', href: '' },
      { name: 'Пункт 1 1', handle: () => alert('1 1') }
    ],
    [
      { label: 'Пункт 2 0', href: '' },
      { label: 'Пункт 2 1', href: '' },
      { name: 'Пункт 2 2' }
    ],
    [{ label: 'Пункт 3 0', href: '' }]
  ];

  const title = 'DAKS • Tailwind CSS';
  const description = 'фреймворк компонующий CSS классы для создания любого дизайна Tailwind CSS';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title mb-2">Tailwind&nbsp;CSS&nbsp;!</h1>
    <h2>API для вашей системы проектирования</h2>
  </header>

  <div class="content">
    <p>
      Служебные классы <strong>Tailwind CSS</strong> помогают Вам работать в рамках ограничений
      системы вместо того, чтобы загромождать ваши таблицы стилей произвольными значениями.
      <b>Tailwind CSS</b> позволяет легко придерживаться выбора цвета, интервалов, типографики, теней
      и всего остального, что составляет хорошо продуманную систему дизайна.
    </p>

    <section class="pt-16">
      <h1 class="mb-8 text-2xl">Выпадающее меню</h1>
      <Dropdown
        class="mr-8"
        label="Меню 0"
        {items} />
      <Dropdown
        class="fixed"
        label="Меню 1"
        {items} />
    </section>

    <section class="pt-16">
      <h1 class="mb-8 text-2xl">Раскрывающийся список</h1>
      <Select />
    </section>
  </div>
</main>
