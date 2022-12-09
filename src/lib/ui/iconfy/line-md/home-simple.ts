import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'line-md',
  icons: {
    'home-simple': {
      body: `
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2">
          <path
            stroke-dasharray="21"
            stroke-dashoffset="21"
            d="M5 21H19">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="21;0" />
          </path>
          <path
            stroke-dasharray="15"
            stroke-dashoffset="15"
            d="M5 21V8M19 21V8">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="15;0" />
          </path>
          <path
            stroke-dasharray="26"
            stroke-dashoffset="26"
            d="M2 10L12 2L22 10">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.5s"
              dur="0.4s"
              values="26;0" />
          </path>
        </g>
        `
        .trim()
        .replace(/\s{2,}/g, ' ')
        .replace(/\n/g, '')
    }
  },
  width: 24,
  height: 24
});
