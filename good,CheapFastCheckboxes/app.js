const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');
toggles.forEach((toggle) => {
  toggle.addEventListener('click', (e) => doTheTrick(e.target));
});

function doTheTrick(theClickedOne) {
  // Here theClickedOne is the nodeElement, and we are checking what
  // nodeElement that is (cheap,fast OR good)

  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }
    if (cheap === theClickedOne) {
      good.checked = false;
    }
    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
