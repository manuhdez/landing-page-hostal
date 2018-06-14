const heroForm = document.querySelector('#hero-form');
const heroInput = heroForm.querySelector('[type="email"]');

heroForm.querySelector('[type="submit"]').addEventListener('click', (e) => {
  console.log(heroInput.value)
  if (heroInput.value && heroInput.value.includes('@')) {
    e.preventDefault();
  }
})