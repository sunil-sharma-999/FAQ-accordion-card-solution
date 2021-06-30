const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');

q.forEach((i) => {
  i.addEventListener('click', (e) => {
    const tag = e.target.parentElement.classList;
    answer(tag);
  });
});

function answer(tag) {
  if (tag.contains('show') && tag.contains('q-container') === false) {
    tag.remove('show');
    tag.add('remove');
  } else if (tag.contains('remove') || tag.contains('q-container') === false) {
    tag.remove('remove');
    tag.add('show');
  } else {
    console.log('Learn to aim -_-');
  }
}
