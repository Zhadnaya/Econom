document.addEventListener('DOMContentLoaded', function() {
    let leaveRequestButton = document.getElementById('leaveRequestButton');
    let form = document.getElementById('myForm');

    leaveRequestButton.addEventListener('click', function() {
        form.style.display = 'block';
    });
});

  document.getElementById('my-modal').addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
      this.style.display = 'none';
    }
  });

  document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('my-modal').style.display = 'block';
  });
  
  
