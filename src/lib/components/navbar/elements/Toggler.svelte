<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { outside } from '$utils/event';

  const dispatch = createEventDispatcher();

  let className = '';
  export { className as class };
</script>

<button
  use:outside={() => dispatch('close')}
  class="relative z-10
         {className}"
  on:click={() => dispatch('toggle')}>
  <slot />
</button>
