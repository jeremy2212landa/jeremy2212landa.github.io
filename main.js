console.log("Hola como Estamos");

let mainevent = document.getElementById('logo');

document.addEventListener('click', (e) => {
  if (!e.target.matches("img")) return false;
  window.location.href = "./#skills";
});
