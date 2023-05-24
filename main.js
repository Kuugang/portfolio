const flashlightEffect = document.querySelector('.flashlight-effect');
const flashlights = document.querySelectorAll('.flashlight-effect div');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const flashlightWidth = flashlights[0].offsetWidth;
  const flashlightHeight = flashlights[0].offsetHeight;

  const flashlightX = mouseX - flashlightWidth / 2;
  const flashlightY = mouseY - flashlightHeight / 2;

  flashlightEffect.style.left = flashlightX + 'px';
  flashlightEffect.style.top = flashlightY + 'px';

  flashlights.forEach((flashlight, index) => {
    flashlight.style.transform = `translate(${flashlightWidth / 2 - (index + 1) * 5}px, ${flashlightHeight / 2 - (index + 1) * 5}px)`;
  });
});
