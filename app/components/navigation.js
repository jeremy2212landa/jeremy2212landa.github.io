export function Navigation() {

  const $nav = document.createElement('nav');
  $nav.classList.add('container-header');
  $nav.innerHTML = '<div class="img-nav"><img src="./app/assets/LandaTechn.png" alt="logo"></div><div id="ham" class="menutoggle"><button class="menu-ham"><span></span><span></span><span></span></button></div><div id="text" class="menucontent"><a href="#home">Home</a><a href="#skills">Skills</a></div>';


  let mainevent = document.getElementById('logo');

  document.addEventListener('click', (e) => {
    if (!e.target.matches("img")) return false;
    window.location.href = "./#home";
  });
  
  return $nav;
}
