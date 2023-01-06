export interface MenuItem {
  label: string;
  title?: string;
  href?: string;
  handle?: (event?: Event) => void;
}

import Dropdown from './Dropdown.svelte';
export default Dropdown;
