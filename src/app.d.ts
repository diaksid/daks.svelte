// See https://kit.svelte.dev/docs/types#app
declare namespace App {
  // interface Error {}
  interface Locals {
    userid: string;
  }
  // interface PageData {}
  // interface Platform {}
}

declare module '*?webp' {
  const value: any;
  export = value;
}

declare module '*&webp' {
  const value: any;
  export = value;
}
