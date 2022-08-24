
const tagsComponent = document.querySelector('.tags__component');
const tagsList = [];
renderComponent();
function renderComponent(){
  tagsComponent.innerHTML = `
    <h1 class="tags__title">Add your tags (at least 3 and maximum 5)</h1>
    <div class="tags__zone">
      <div class="tags__wrapper"></div>
      <input type="text" class="tags__input">
    </div>
  `;
  tagsComponent.addEventListener('keydown', (e) => handlerKeyDown(e));
}

function handlerKeyDown(e) {
  const key = e.key.toLowerCase();
  if(key !== 'enter' && key !== 'backspace') return;
  const currentVal = e.target.value;

  // If enter key
  if(key === 'enter') {
    if(!currentVal) return;
    renderTag(currentVal);
    e.target.value = '';
    return;
  }
  // if backspace key
  if(currentVal) return;
  deleteTag(tagsList.length-1);
}

function createTag(tagText) {
  const tag = document.createElement('div');
  tag.dataset.index = tagsList.length;
  tag.classList.add('tag');
  tag.innerHTML = `
  <p>${tagText}</p>
  <span class="material-symbols-outlined tags__icon" >close</span>
  `;
  tag.querySelector('.tags__icon').addEventListener('click', (e) => {
    const index = e.target.parentElement.dataset.index;
    deleteTag(index);
  });
  return tag;
}

function renderTag(tagText){
  const tag = createTag(tagText);
  tagsList.push(tag);
  const tagsWrapper = tagsComponent.querySelector('.tags__wrapper');
  tagsWrapper.append(tag);
}

function deleteTag(indexTag){
  if(indexTag < 0) return;
  tagsList[indexTag].remove();
}

