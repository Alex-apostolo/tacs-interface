const backend = 'http://127.0.0.1:5000'

// Add event listener for submitting the files
const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData();
    const browseInput = document.querySelectorAll('browse-input');
    const fileCount = [];

    browseInput.forEach(selectedInput => {
        const selectedFiles = selectedInput.querySelectorAll('input');
        selectedFiles.forEach(selectedFiles => {
            fileCount.push(selectedFiles.files.length);
            for (let i = 0; i < selectedFiles.files.length; i++) {
                // Add additional data to file to indicate that its in a specific group
                formData.append('file', selectedFiles.files[i]);
            }
        });
    });

    fetch(backend + '/tacs', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(object => {
            // Iterate through all the files and combine the frequency counter
            console.log(object);
            // If more than one group is used, then calculate their general parts and compare
            // Display first five in Specific field
        });
});