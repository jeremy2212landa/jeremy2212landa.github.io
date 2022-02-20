//import {CardSkills} from "";

export function Skills(){

  const $skills = document.createElement('section');
  $skills.setAttribute('id', 'skills');
  $skills.classList.add('skills');
  $skills.innerHTML = '<div class="cards-skill"><h2>Back-End</h2><ul><li>PHP</li><li>Python</li><li>SQL</li></ul></div><div class="cards-skill"><h2>Front-End</h2><ul><li>Javascript</li><li>HTML5</li><li>CSS3</li></ul></div><div class="cards-skill"><h2>Cibersecurity</h2><ul><li>Linux</li><li>Bash</li><li>Nmap</li></ul></div>';


  return $skills;

}
