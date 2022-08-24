
const tagsComponent = document.querySelector('.tags__component');
renderComponent();
function renderComponent(){
  tagsComponent.innerHTML = `
    <h1 class="tags__title">Add your tags</h1>
    <div class="tags__zone">
      <div class="tags__wrapper"></div>
      <input type="text" class="tags__input">
    </div>
  `;
  tagsComponent.addEventListener('keydown', (e) => handlerKeyDown(e));
}

function handlerKeyDown(e) {
  if(e.key.toLowerCase() !== 'enter') return;

  // If enter
  const currentVal = e.target.value;
  renderTag(currentVal);
  e.target.value = '';
}

function createTag(tagText) {
  const tag = document.createElement('div');
  tag.innerHTML = `
    <p>${tagText}</p>
    <span class="material-symbols-outlined tags__icon">close</span>
  `;
  return tag;
}

function renderTag(tagText){
  const tag = createTag(tagText);
  const tagsWrapper = tagsComponent.querySelector('.tags__wrapper');
  tagsWrapper.append(tag);
}

