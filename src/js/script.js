const treeList = document.querySelector('.tree');
const treeListItem = treeList.getElementsByTagName('li');

for (let i = 0; i < treeListItem.length; i++) {
  const span = document.createElement('span');
  let li = treeListItem[i];
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

// console.log(treeList);

treeList.addEventListener('click', (event) => {
  target = event.target;
  if (target.tagName != 'SPAN') {
    return;
  }
  let children = target.parentNode.getElementsByTagName('ul')[0];
  if (!children) {
       return;
  }
  children.hidden =  !children.hidden;
});
