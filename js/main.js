// модальное окно
// modal window
let more = document.querySelector('.more'),
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close');
// обработчик событий для кнопки открытия модального окна.
// event handler for the modal window open button.
more.addEventListener('click', function() {
overlay.style.display = 'block';
this.classList.add('more-splash');
// Запречащем прокрутку страницы при появлении модального окна
// Do not scroll the page when a modal window appears
document.body.style.overflow = 'hidden';

});
// Обработчик событий для кнопки закрытия модального окна(крестик)
// Event handler for modal window close button(cross)
close.addEventListener('click', function() {
overlay.style.display = 'none';
more.classList.remove('more-splash');
document.body.style.overflow = '';

});