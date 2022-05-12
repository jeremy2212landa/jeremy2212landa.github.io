export function Hero(){

  const $section = document.createElement('section'), $hero = document.createElement('div');
  
  $section.setAttribute('id', 'home');

  $hero.classList.add('hero');
  $hero.innerHTML = `
  <h1 class="text-tittle">{ Jeremy Landa }</h1>
  <h3 class="tittle-subtext">Cybersecurity Analist, Developer 💜</h3>`;

  $section.appendChild($hero);


  return $section;
}