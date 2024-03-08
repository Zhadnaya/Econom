document.addEventListener('DOMContentLoaded', function() {
    var leaveRequestButton = document.getElementById('leaveRequestButton');
    var form = document.getElementById('myForm');

    leaveRequestButton.addEventListener('click', function() {
        form.style.display = 'block';
    });
});


