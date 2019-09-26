import {Responsive} from "semantic-ui-react";

export function getWidth() : number|string|undefined {
  const isSSR: boolean = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

// export const getWidth = () => {
//   const isSSR: boolean = typeof window === 'undefined';
//   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
// };
