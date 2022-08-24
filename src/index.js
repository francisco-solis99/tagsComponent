
const tagsComponent = document.querySelector('.tags__component');
// save tags
const tagsList = [];
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
  const key = e.key.toLowerCase();
  if(key !== 'enter' && key !== 'backspace') return;
  const currentVal = e.target.value.split(' ').join('-');

  // If enter key
  if(key === 'enter' && currentVal && !isReapeated(currentVal)) {
    renderTag(currentVal);
    e.target.value = '';
    return;
  }
  // if backspace key
  if(currentVal || !tagsList.length) return;
  tagsList[tagsList.length-1].htmlTag.remove();
  tagsList.pop();
}

function isReapeated(tagText) {
  return tagsList.includes(tagText);
}

function renderTag(tagText) {
  const tag = createTag(tagText);
  tagsList.push({
    tagText,
    htmlTag: tag
  });
  const tagsWrapper = document.querySelector('.tags__wrapper');
  setTimeout(() => {
    tagsWrapper.appendChild(tag);
  }, 0);
}

function createTag(tagText){
  const tag = document.createElement('div');
  tag.classList.add('tag');
  const closeIcon = document.createElement('span');
  closeIcon.classList.add('material-symbols-outlined', 'tag__close-icon');
  closeIcon.textContent = 'close'
  const nodeText = document.createTextNode(tagText);
  tag.append(nodeText, closeIcon);

  // listern to delete the tag
  closeIcon.addEventListener('click', () => deleteTag(tagText));
  return tag;
}

function deleteTag(tagValue) {
  const index = tagsList.findIndex(({tagText}) => tagText === tagValue);
  tagsList[index].htmlTag.classList.add('fadeOut');
  setTimeout(() => {
    tagsList[index].htmlTag.remove();
    tagsList.splice(index, 1);
  }, 250);
}
