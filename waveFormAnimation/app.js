const labels = document.querySelectorAll('.form-control label');
console.log(labels);
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, ixd) => {
      `<span style="transition-delay:${ixd*50}ms">${letter}</span>`;
    })
    .join('');
});
