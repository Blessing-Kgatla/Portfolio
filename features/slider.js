const slides  = document.querySelectorAll('.Slide');
const dots    = document.querySelectorAll('.Dot');
let   current = 0;

function goTo(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

document.getElementById('PrevBtn').addEventListener('click', () => goTo(current - 1));
document.getElementById('NextBtn').addEventListener('click', () => goTo(current + 1));

dots.forEach(dot => {
  dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index)));
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});