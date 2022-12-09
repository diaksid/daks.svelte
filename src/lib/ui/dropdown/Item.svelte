<script lang="ts">
  export let item!: MenuItem | NavLink;
  export let tag = 'href' in item ? 'a' : 'span';

  const {handle, label, title } = item;
  const href = 'href' in item ? item.href.trim() || './' : undefined;
</script>

<svelte:element
  this={tag}
  on:click={handle}
  on:keypress
  role="menuitem"
  class="block
         px-4 py-2
         text-sm text-gray-700 disabled:text-gray-300
         hover:bg-gray-300/50
         cursor-pointer"
  {href}
  title={title?.trim() || undefined}
  disabled={(href || handle) ? undefined : null}
  tabindex="-1">
  {@html label}
</svelte:element>
