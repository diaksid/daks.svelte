// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  interface Locals {
    userid: string;
  }
  // interface PageData {}
  // interface Platform {}
}

interface MenuItem {
  label: string;
  title?: string;
  handle?: (event?: Event) => void;
}

interface NavLink extends MenuItem {
  href: string;
  links?: NavLink[];
}

declare module '*?webp' {
  const value: any;
  export = value;
}

declare module '*&webp' {
  const value: any;
  export = value;
}

/*
interface WebPage {
  itemtype?: string = 'WebPage';
  path: string;
  canonical: string;
}

interface Infographic {
  text: string;
  icon: any;
  max?: number;
  count?: number;
  node?: HTMLElement;
}
*/
