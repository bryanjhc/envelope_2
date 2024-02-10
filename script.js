document.getElementById('envelope').addEventListener('click', function() {
    var letter = document.getElementById('letter');
    letter.classList.toggle('open');
});

// Checkbox functionality to behave like radio buttons
var checkboxes = document.querySelectorAll('input[type="checkbox"][name="response"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        checkboxes.forEach(function(otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
});
