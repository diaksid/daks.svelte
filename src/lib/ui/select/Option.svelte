<script lang="ts">
  import { outside } from 'daks-svelte/utils/event';

  //let className = '';
  //export { className as class };

  //export let lable!: string;
  //export let title = '';
  //export let duration = 300;

  const classes = ['pointer-events-none', 'opacity-0', 'scale-y-75'];

  const close = (node?: HTMLElement) =>
    node?.parentElement?.nextElementSibling?.classList.add(...classes);

  const toggle = (event: any) =>
    classes.forEach((val) => event.parentElement?.nextElementSibling?.classList.toggle(val));
</script>

<div>
  <div class="block text-sm font-medium text-gray-700">
    Assigned to
  </div>
  <div class="relative mt-1">
    <button
      use:outside={close}
      on:click|preventDefault|stopPropagation={toggle}
      on:dblclick
      on:keypress
      type="button"
      class="relative
             w-full py-2 pl-3 pr-10
             rounded-md shadow-sm border border-gray-300 bg-white
             text-left sm:text-sm text-gray-700
             focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      aria-haspopup="listbox"
      aria-expanded="true"
      aria-labelledby="listbox-label">
      <span class="flex items-center pointer-events-none">
        <!-- Heroicon name: bars-3 -->
        <svg
          class="w-6 h-6 text-gray-400"
          viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <span class="ml-3 block truncate">Select</span>
      </span>
      <span class="absolute inset-y-0 right-0 ml-3 flex items-center pr-2 pointer-events-none">
        <!-- Heroicon name: mini/chevron-up-down -->
        <svg
          class="h-6 w-6 text-gray-400 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </button>

    <!--
        Select popover, show/hide based on select state.
  
        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      -->
    <ul
      role="listbox"
      class="absolute z-10 
             mt-1 py-1 max-h-56 w-full overflow-auto
             rounded-md shadow-lg bg-white
             text-base sm:text-sm
             ring-1 ring-black ring-opacity-5
             focus:outline-none
             transition origin-top
             {classes.join(' ')}"
      tabindex="-1"
      aria-labelledby="listbox-label"
      aria-activedescendant="listbox-option-3">
      <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
  
          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
      <li
        role="option"
        id="listbox-option-0"
        class="relative
               py-2 pl-3 pr-9 
               text-gray-900
               cursor-default select-none"
        aria-selected="true">
        <div class="flex items-center">
          <!-- Heroicon name: stop -->
          <svg
            class="w-6 h-6 text-gray-400"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
          </svg>
          <!--img
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            class="h-6 w-6 flex-shrink-0 rounded-full" /-->
          <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
          <span class="font-normal ml-3 block truncate">Option 0</span>
        </div>

        <!--
            Checkmark, only display for selected option.
  
            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          -->
        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          <!-- Heroicon name: mini/check -->
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </li>

      <!-- More items... -->
    </ul>
  </div>
</div>
