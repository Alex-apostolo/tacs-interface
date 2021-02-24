const backend = 'http://127.0.0.1:5000'

// Add event listener for submitting the files
const form = document.getElementById('form');
form.addEventListener('submit', e => {
    const selectedFiles = document.querySelectorAll('input');
    e.preventDefault();
    const formData = new FormData();
    selectedFiles.forEach(selectedFiles => {
        for (let i = 0; i < selectedFiles.files.length; i++) {
            formData.append(selectedFiles.files[i].name, selectedFiles.files[i]);
        }
    });

    fetch(backend + '/tacs')
    .then(result => result.text())
    .then(json => console.log(json));
    // Display the key/value pairs
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
});