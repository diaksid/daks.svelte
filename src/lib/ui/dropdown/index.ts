export { default as Dropdown } from './Dropdown.svelte';

export interface MenuItem {
  label: string;
  title?: string;
  href?: string;
  handle?: (event?: Event) => void;
}
