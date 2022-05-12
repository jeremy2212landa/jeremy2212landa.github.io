//import {Header} from "./components/header.js";
import {Hero} from "./components/hero.js";
//import {Skills} from "./components/skills.js"
import {Footer} from "./components/footer.js"

  const $root = document.getElementById('root');

export function App () {

    //$root.appendChild(Header());
    $root.appendChild(Hero());
    //$root.appendChild(Skills());
    $root.appendChild(Footer());

}


/*

let mainevent = document.getElementById('logo');

document.addEventListener('click', (e) => {
  if (!e.target.matches("img")) return false;
  window.location.href = "./#home";
});

  let tt = document.getElementById('text');
  let hamburger = document.getElementById('hamburger');
  document.addEventListener('click', (e) => {
    if (!e.target.matches(".menutoggle")) {
      tt.classList.remove("active");
      tt.classList.add("menucontent");
      return false;
    }
    tt.classList.toggle("menucontent");
    tt.classList.toggle("active");
    console.log(tt);
    // if (!e.target.matches("hamburger")) return false;

  });

  */
