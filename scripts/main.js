/*Модальное окно контактов*/
document.getElementById('contact-modal').addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
      this.style.display = 'none';
    }
});

document.getElementById('open-contact-modal').addEventListener('click', function() {
document.getElementById('contact-modal').style.display = 'block';
});

/*модальное окно заявок*/
document.getElementById('message-modal').addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
      this.style.display = 'none';
    }
});

document.getElementById('open-message-modal').addEventListener('click', function() {
document.getElementById('message-modal').style.display = 'block';
});
