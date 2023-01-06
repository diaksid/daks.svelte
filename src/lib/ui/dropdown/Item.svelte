<script lang="ts">
  export let item!: MenuItem | NavLink;
  export let tag = 'span';

  const href = ('href' in item && item.href.trim()) || './';
  const { handle, label, title } = item;
</script>

{#if href}
  <a
    on:click={handle}
    on:keypress
    class="block
         px-4 py-2
         text-sm text-gray-700 disabled:text-gray-300
         hover:bg-gray-300/50
         cursor-pointer"
    {href}
    title={title?.trim() || undefined}
    role="menuitem">
    {@html label}
  </a>
{:else}
  <svelte:element
    this={tag}
    on:click={handle}
    on:keypress
    class="block
         px-4 py-2
         text-sm text-gray-700 disabled:text-gray-300
         hover:bg-gray-300/50
         cursor-pointer"
    title={title?.trim() || undefined}
    role="menuitem">
    {@html label}
  </svelte:element>
{/if}
