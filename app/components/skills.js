import {CardSkills} from "./cardskills.js";

export function Skills(){

  const $skills = document.createElement('section');
  $skills.setAttribute('id', 'skills');
  $skills.classList.add('skills');
  //let props = {tittle: 'Back-End', elements: ['PHP','Python','SQL']}
  $skills.appendChild(CardSkills({tittle: 'Back-End', elements: ['PHP','Python','SQL']}));
  $skills.appendChild(CardSkills({tittle: 'Front-End', elements: ['Javascript', 'HTML5','CSS3']}));
  $skills.appendChild(CardSkills({tittle: 'Cibersecurity', elements: ['Linux','Bash','Nmap']}));


  return $skills;

}
