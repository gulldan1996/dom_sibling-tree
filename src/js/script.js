let tree = document.getElementsByTagName('ul')[0];

let treeLis = tree.getElementsByTagName('li');

/* wrap all textNodes into spans */
for (let i = 0; i < treeLis.length; i++) {
  let li = treeLis[i];

  let span = document.createElement('span');
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

/* catch clicks on whole tree */
tree.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'SPAN') {
    return;
  }

  /* now we know the SPAN is clicked */
  let childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
  if (!childrenContainer) return; // no children

  childrenContainer.hidden = !childrenContainer.hidden;
}