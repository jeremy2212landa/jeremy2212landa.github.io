console.log("Hola como Estamos");

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
