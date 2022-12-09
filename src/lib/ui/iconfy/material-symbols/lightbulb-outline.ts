import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'material-symbols',
  icons: {
    'lightbulb-outline': {
      body: `
        <path
          fill="currentColor"
          d="M12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-4-3v-2h8v2Zm.25-3q-1.725-1.025-2.737-2.75Q4.5 11.525 4.5 9.5q0-3.125 2.188-5.312Q8.875 2 12 2q3.125 0 5.312 2.188Q19.5 6.375 19.5 9.5q0 2.025-1.012 3.75q-1.013 1.725-2.738 2.75Zm.6-2h6.3q1.125-.8 1.738-1.975q.612-1.175.612-2.525q0-2.3-1.6-3.9T12 4Q9.7 4 8.1 5.6T6.5 9.5q0 1.35.613 2.525Q7.725 13.2 8.85 14ZM12 14Z"
        />
        `
        .trim()
        .replace(/\s{2,}/g, ' ')
        .replace(/\n/g, '')
    }
  },
  width: 24,
  height: 24
});
