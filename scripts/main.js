document.addEventListener('DOMContentLoaded', function() {
    let leaveRequestButton = document.getElementById('leaveRequestButton');
    let form = document.getElementById('myForm');

    leaveRequestButton.addEventListener('click', function() {
        form.style.display = 'block';
    });
});


