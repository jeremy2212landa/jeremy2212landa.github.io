export function CardSkills(props){

  const $div = document.createElement('div');
  $div.classList.add('cards-skill');
  let $ul = document.createElement('ul');
  $div.innerHTML = `<h2>${props.tittle}</h2>`;

  props.elements.forEach( (item) => {
    $ul.innerHTML += `<li>${item}</li>`;
  });

  $div.appendChild($ul);
  return $div;
}
