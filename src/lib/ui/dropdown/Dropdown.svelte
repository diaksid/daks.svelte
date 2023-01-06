<script lang="ts">
  import { outside } from 'daks-svelte/utils/event';
  import type { MenuItem, NavLink } from 'daks-svelte/types';
  import Items from './Items.svelte';
  import Item from './Item.svelte';

  let className = '';
  export { className as class };

  export let label!: string;
  export let title = '';

  export let duration = 300;
  export let items!: (MenuItem | NavLink)[][];

  const classes = ['pointer-events-none', 'opacity-0', 'scale-75'];

  const close = (node?: HTMLElement) =>
    node?.parentElement?.nextElementSibling?.classList.add(...classes);

  const toggle = (event: any) =>
    classes.forEach((val) => event.target.parentElement?.nextElementSibling?.classList.toggle(val));
</script>

<div
  class="relative inline-block text-left fixed:text-right
         {className}">
  <div>
    <button
      use:outside={close}
      on:click|preventDefault|stopPropagation={toggle}
      on:dblclick
      id="menu-button"
      type="button"
      class="inline-flex w-full justify-center px-4 py-2
             bg-white hover:bg-gray-50 rounded-md border border-gray-300 shadow-sm
             font-medium text-sm text-gray-700
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      title={title.trim() || undefined}
      aria-expanded="true"
      aria-haspopup="true">
      {label}
      <!-- Heroicon name: mini/chevron-down -->
      <svg
        class="w-6 h-6 ml-2 -mr-1
               pointer-events-none"
        viewBox="0 0 20 20"
        aria-hidden="true">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
      </svg>
    </button>
  </div>

  <div
    role="menu"
    class="absolute z-40 left-auto right-0 fixed:left-0 fixed:right-auto
           mt-2 w-56
           divide-y divide-gray-100
           rounded-md bg-white shadow-lg
           ring-1 ring-black ring-opacity-5
           focus:outline-none
           transition origin-top-right fixed:origin-top-left
           {classes.join(' ')}"
    style:transition-duration={`${duration}ms`}
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1">
    {#each items as item}
      {#if item instanceof Array}
        <Items items={item} />
      {:else}
        <Item {item} />
      {/if}
    {/each}
  </div>
</div>
