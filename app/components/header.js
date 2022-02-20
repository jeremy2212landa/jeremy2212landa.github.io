import {Navigation} from "./navigation.js";

export function Header() {

  const $header = document.createElement('header');
  $header.classList.add('header');
  $header.appendChild(Navigation());

  return $header;
}
